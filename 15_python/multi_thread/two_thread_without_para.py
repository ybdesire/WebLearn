#!/usr/bin/python
# python 3.x
import threading
import time,os

# Define a function for the thread
def print_time():
    print("thread, pid={0}".format(  os.getpid() ))

# Create two threads as follows
try:
    print('main, pid={0}'.format(os.getpid()))
    threading.Thread( target=print_time ).start()
    threading.Thread( target=print_time ).start()
except:
    print("Error: unable to start thread")

