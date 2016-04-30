#!/usr/bin/python
# python 3.x

import threading
 
class MyThread(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self);
 
    def run(self):
        print( "I am {0}".format(self.name) )
 
if __name__ == "__main__":
    t1 = MyThread()
    t1.start()
    
    t2 = MyThread()
    t2.start()
    
    t3 = MyThread()
    t3.start()
	