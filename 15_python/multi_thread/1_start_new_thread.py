#!/usr/bin/python
# python 3.x
import threading
import time

# Define a function for the thread
def print_time(threadName, delay):
   count = 0
   while count < 5:
      time.sleep(delay)
      count += 1
      print("{0}: {1}".format( threadName, time.ctime(time.time()) ))

# Create two threads as follows
try:
   threading.Thread( target=print_time, args=("Thread-1", 2, ) ).start()
   threading.Thread( target=print_time, args=("Thread-2", 4, ) ).start()
except:
   print("Error: unable to start thread")


