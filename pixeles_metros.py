import cv2

def click_event(event, x, y, flags, params):
    global points
    if event == cv2.EVENT_LBUTTONDOWN:
        points.append((x, y))
        if len(points) == 2:
            cv2.line(resized_frame, points[0], points[1], (0, 255, 0), 2)
            cv2.imshow('Frame', resized_frame)
            dist = ((points[0][0] - points[1][0])**2 + (points[0][1] - points[1][1])**2) ** 0.5
            print(f'Distancia en píxeles: {dist}')
            points = []

video = cv2.VideoCapture('caidalibre.mp4')

points = []

scale_percent = 50  

while True:
    ret, frame = video.read()
    if not ret:
        print("Fin del video o error en la carga.")
        break

    
    width = int(frame.shape[1] * scale_percent / 100)
    height = int(frame.shape[0] * scale_percent / 100)
    dim = (width, height)
    resized_frame = cv2.resize(frame, dim, interpolation=cv2.INTER_AREA)

    
    cv2.imshow('Frame', resized_frame)
    
    
    cv2.setMouseCallback('Frame', click_event)

    
    key = cv2.waitKey(30) & 0xFF
    if key == ord('p'):  
        cv2.waitKey(0)  
    elif key == ord('q'):  
        break
video.release()
cv2.destroyAllWindows()

