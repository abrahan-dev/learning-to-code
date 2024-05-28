import webbrowser
import time


print("This program started on "+time.ctime())
breaks = 3

while breaks > 0:
    time.sleep(2)
    webbrowser.open("https://www.youtube.com/watch?v=IkOLYvOvH2w")
    breaks = breaks - 1
