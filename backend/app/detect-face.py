import cv2
import face_recognition

# Open your webcam (0 = default camera)
video = cv2.VideoCapture(0)

while True:
    # Grab a single frame
    ret, frame = video.read()
    if not ret:
        break

    # Convert BGR (OpenCV) to RGB (face_recognition expects RGB)
    rgb_frame = frame[:, :, ::-1]

    # Detect faces
    face_locations = face_recognition.face_locations(rgb_frame)
    print(face_locations)

    # Draw rectangles
    for (top, right, bottom, left) in face_locations:
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)

    # Show the frame
    cv2.imshow("Face Detection", frame)

    # Press 'q' to quit
    if cv2.waitKey(0):
        break

video.release()
cv2.destroyAllWindows()


