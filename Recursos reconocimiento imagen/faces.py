import numpy as np
import cv2
import argparse


def face(img, face_cascade, eye_cascade):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)
    for (x, y, w, h) in faces:
        # cv2.rectangle(img, (x, y), (x + w, y + h), (255, 0, 0), 2)
        roi_gray = gray[y:y + h, x:x + w]
        roi_color = img[y:y + h, x:x + w]
        eyes = eye_cascade.detectMultiScale(roi_gray)
        cabeza = cv2.imread("cabeza_p.png")
        img[y:y + 94, x:x + 88] = cabeza
        for (ex, ey, ew, eh) in eyes:
            # cv2.rectangle(roi_color, (ex, ey), (ex + ew, ey + eh), (0, 255, 0), 2)
            ojo = cv2.imread("ojos_p.png")
            #img[y+ey:y+ey+29,x+ex:x+ex+25] = ojo

    return img

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier('haarcascade_eye.xml')



# construct the argument parse and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-i", "--images", required=True,
                help="path to input dataset of images")
ap.add_argument("-o", "--output", required=True,
                help="path to input dataset of images")
args = vars(ap.parse_args())

# load the image, convert it to grayscale, and blur it slightly
# image = cv2.imread(args["images"])


fourcc = cv2.VideoWriter_fourcc(*'XVID')
cap = cv2.VideoCapture(args["images"])
empieza = False
while cap.grab():
    flag, frame = cap.retrieve()
    if not flag:
        continue
    else:
        if not empieza:
            height, width = frame.shape[:2]
            out = cv2.VideoWriter(str(args["output"]) + ".avi", fourcc, 60, (width, height))

            empieza = True
        else:

            frame = face(frame, face_cascade, eye_cascade)
            cv2.imshow('video', frame)

            #out.write(frame)
        if cv2.waitKey(10) == 27:
            cap.release()
            out.release()
            break
