# import the necessary packages
import numpy as np
import argparse
import glob
import cv2


def auto_canny(image, sigma=0.33):
    # compute the median of the single channel pixel intensities
    v = np.median(image)
    # apply automatic Canny edge detection using the computed median
    lower = int(max(0, (1.0 - sigma) * v))
    upper = int(min(255, (1.0 + sigma) * v))
    edged = cv2.Canny(image, lower, upper)
    cv2.bitwise_not(edged, edged)
    # return the edged image
    return edged


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
            out = cv2.VideoWriter(str(args["output"])+ ".avi", fourcc, 30,( height, width))
            empieza = True
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        blurred = cv2.GaussianBlur(gray, (3, 3), 0)
        # apply Canny edge detection using a wide threshold, tight
        # threshold, and automatically determined threshold
        # wide = cv2.Canny(blurred, 10, 200)
        # tight = cv2.Canny(blurred, 225, 250)
        auto = auto_canny(blurred)
        out.write(frame)
cap.release()
out.release()


'''
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
blurred = cv2.GaussianBlur(gray, (3, 3), 0)
# apply Canny edge detection using a wide threshold, tight
# threshold, and automatically determined threshold
# wide = cv2.Canny(blurred, 10, 200)
# tight = cv2.Canny(blurred, 225, 250)
auto = auto_canny(blurred)

# show the images
cv2.imshow("Bordes", auto)
# cv2.imshow("Edges", np.hstack([wide, tight, auto]))
cv2.waitKey(0)
'''