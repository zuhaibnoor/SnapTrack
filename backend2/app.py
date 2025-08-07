import cv2
from flask import Flask, Response, render_template

app = Flask(__name__)

# RTSP stream URL (replace this with your camera's URL)
rtsp_url = "rtsp://username:password@IPaddress:port/videoMain"

# Initialize the video capture object
cap = cv2.VideoCapture(rtsp_url)

def generate_frames():
    while True:
        # Capture frame-by-frame from the RTSP stream
        success, frame = cap.read()
        
        if not success:
            break  # Stop if we can't get a frame
        
        # Encode the frame to JPEG format
        ret, buffer = cv2.imencode('.jpg', frame)
        
        if ret:
            # Convert the frame to bytes and yield it as part of the MJPEG stream
            frame_bytes = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    # Return a Response object that streams the video feed
    return Response(generate_frames(), 
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug = True, host='0.0.0.0', port=5000)
