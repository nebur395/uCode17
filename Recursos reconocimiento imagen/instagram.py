# import the necessary packages
import numpy as np
import argparse
import glob
import cv2
from scipy import stats


def auto_canny(image, sigma=0.33):
    # compute the median of the single channel pixel intensities
    v = np.median(image)
    # apply automatic Canny edge detection using the computed median
    lower = int(max(0, (1.0 - sigma) * v))
    upper = int(min(255, (1.0 + sigma) * v))
    edged = cv2.Canny(image, lower, upper)

    # return the edged image
    return edged


# construct the argument parse and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-i", "--images", required=True,
                help="path to input dataset of images")
ap.add_argument("-o", "--output", required=True,
                help="path to input dataset of images")

ap.add_argument("-f", "--filter", required=True,
                help="path to input dataset of images")
args = vars(ap.parse_args())


def brightness_contrast( img, alpha=1.0, beta=0):
    img_contrast = img * (alpha)
    img_bright = img_contrast + (beta)
    # img_bright = img_bright.astype(int)
    img_bright = stats.threshold(img_bright, threshmax=255, newval=255)
    img_bright = stats.threshold(img_bright, threshmin=0, newval=0)
    img_bright = img_bright.astype(np.uint8)
    return img_bright


def channel_enhance( img, channel, level=1):
    if channel == 'B':
        blue_channel = img[:, :, 0]
        # blue_channel = (blue_channel - 128) * (level) +128
        blue_channel = blue_channel * level
        blue_channel = stats.threshold(blue_channel, threshmax=255, newval=255)
        img[:, :, 0] = blue_channel
    elif channel == 'G':
        green_channel = img[:, :, 1]
        # green_channel = (green_channel - 128) * (level) +128
        green_channel = green_channel * level
        green_channel = stats.threshold(green_channel, threshmax=255, newval=255)
        img[:, :, 0] = green_channel
    elif channel == 'R':
        red_channel = img[:, :, 2]
        # red_channel = (red_channel - 128) * (level) +128
        red_channel = red_channel * level
        red_channel = stats.threshold(red_channel, threshmax=255, newval=255)
        img[:, :, 0] = red_channel
    img = img.astype(np.uint8)
    return img


def hue_saturation( img_rgb, alpha=1, beta=1):
    img_hsv = cv2.cvtColor(img_rgb, cv2.COLOR_BGR2HSV)
    hue = img_hsv[:, :, 0]
    saturation = img_hsv[:, :, 1]
    hue = stats.threshold(hue * alpha, threshmax=179, newval=179)
    saturation = stats.threshold(saturation * beta, threshmax=255, newval=255)
    img_hsv[:, :, 0] = hue
    img_hsv[:, :, 1] = saturation
    img_transformed = cv2.cvtColor(img_hsv, cv2.COLOR_HSV2BGR)
    return img_transformed


# Use interpolate instead of look uptable which was so 10 years ago
def histogram_matching( img, matching_img, number_of_bins=255):
    img_res = img.copy()
    for d in range(img.shape[2]):
        img_hist, bins = np.histogram(img[:, :, d].flatten(), number_of_bins, normed=True)
        matching_img_hist, bins = np.histogram(matching_img[:, :, d].flatten(), number_of_bins, normed=True)
        # print bins[:-1]

        cdf_img = img_hist.cumsum()
        cdf_img = (255 * cdf_img / cdf_img[-1]).astype(np.uint8)  # normalize

        cdf_match = matching_img_hist.cumsum()
        cdf_match = (255 * cdf_match / cdf_match[-1]).astype(np.uint8)  # normalize

        im2 = np.interp(img[:, :, d].flatten(), bins[:-1], cdf_img)
        im3 = np.interp(im2, cdf_match, bins[:-1])

        img_res[:, :, d] = im3.reshape((img.shape[0]), img.shape[1])

    return img_res



# load the image, convert it to grayscale, and blur it slightly
# image = cv2.imread(args["images"])
def nashville( img, hue=1, saturation=1.5, contrast=1.5, brightness=-30):
    img = hue_saturation(img, hue, saturation)
    img = brightness_contrast(img, contrast, brightness)
    return img


def lomo(img, r_channel=1.33, g_channel=1.33):
    img = channel_enhance(img, "R", r_channel)
    img = channel_enhance(img, "G", g_channel)
    return img


def gotham( img, hue=1, saturation=0.1, contrast=1.3, brightness=-20):
    img = hue_saturation(img, hue, saturation)
    img = brightness_contrast(img, contrast, brightness)
    return img


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
            out = cv2.VideoWriter(str(args["output"])+ ".avi", fourcc, 30,( width, height))
            empieza = True
        if "lomo" in args["filter"]:
            out.write(lomo(frame))
        elif "gotham" in args["filter"]:
            out.write(gotham(frame))

        else:
            out.write(nashville(frame))



        # cv2.imshow('video', auto)

cap.release()
out.release()
cv2.destroyAllWindows()

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