import cv2
from flask import Flask, Response, render_template
import time

app = Flask(__name__)

def generate_frames():
    
    #----------------------------------------------
    IPADDRESS = '192.168.100.54'
    PORT = '554'
    USERNAME = 'admin'
    PASSWORD = ''
    #----------------------------------------------
    
    # RTSP URL format for different cameras
    #IMOU
    rtsp_url = f"rtsp://{USERNAME}:{PASSWORD}@{IPADDRESS}:{PORT}/cam/realmonitor?channel=1&subtype=0"

    #FOSCAM
    # rtsp_url = f"rtsp://{USERNAME}:{PASSWORD}@{IPADDRESS}:{PORT}/videoMain"

    cap = None

    while True:
        try:
            if cap is None or not cap.isOpened():
                print("\033[92m[INFO] Connecting to RTSP stream...\033[0m ")
                cap = cv2.VideoCapture(rtsp_url)
                                
                if not cap.isOpened():
                    for i in range(5, 0, -1):
                        print(f"\033[91m[ERROR]\033[0m Unable to connect. Retrying in {i} seconds...")
                        time.sleep(1)                    
                    continue
                print("\033[92m[INFO]\033[0m RTSP stream connected.")
            
            success, frame = cap.read()

            if not success or frame is None:
                print("\033[93m[WARNING]\033[0m Frame read failed. Reconnecting...")
                cap.release()
                cap = None
                for i in range(5, 0, -1):
                        print(f"\033[91m[ERROR]\033[0m Frame read failed. Reconnecting in {i} seconds...")
                        time.sleep(1)
                continue

            # Resize for lower resolution
            frame = cv2.resize(frame, (320, 180))

            # Encode with lower JPEG quality
            encode_param = [int(cv2.IMWRITE_JPEG_QUALITY), 50]
            ret, buffer = cv2.imencode('.jpg', frame, encode_param)

            if not ret:
                print("\033[91m[ERROR]\033[0m Frame encoding failed.")
                continue

            frame_bytes = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

        except:
            print("\033[91m[ERROR]\033[0m An error occurred. Releasing resources and retrying...")
            if cap is not None:
                cap.release()
            cap = None

        

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    
    return Response(generate_frames(), 
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug = True, host='0.0.0.0', port=5000)
