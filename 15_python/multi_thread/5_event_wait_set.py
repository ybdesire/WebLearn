import threading
import time
 
class MyThread(threading.Thread):
    def __init__(self, signal):
        threading.Thread.__init__(self)
        self.singal = signal# pass here by ctor
 
    def run(self):
        print("I am {0},I will sleep ...".format(self.name))
        self.singal.wait()
        print("I am {0}, I awake...".format(self.name))
 
if __name__ == "__main__":
    singal = threading.Event()
    for t in range(0, 3):
        thread = MyThread(singal)
        thread.start()
 
    print("main thread sleep 3 seconds... ")
    time.sleep(3)
 
    singal.set()
    