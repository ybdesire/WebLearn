import threading
import time


condition = threading.Condition()
products = 0


class Producer(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)
    
    def run(self):
        global condition, products
        while True:
            if condition.acquire():
                if(products<10):
                    products += 1
                    print('{0}: produce one, now products={1}'.format(self.name, products))
                    condition.notify()
                else:
                    print('{0}: now products=10, stop product'.format(self.name))
                    condition.wait()
                condition.release()
            time.sleep(2)

class Consumer(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)
    
    def run(self):
        global condition, products
        while True:
            if condition.acquire():
                if(products>=1):
                    products -= 1
                    print('{0}: consume one, now products={1}'.format(self.name, products))
                    condition.notify()
                else:
                    print('{0}: now products=0, wait'.format(self.name))
                    condition.wait()
                condition.release()
            time.sleep(2)


if __name__ == '__main__':
    for i in range(2):
        th_producer = Producer()
        th_producer.start()
    
    for i in range(10):
        th_consumer = Consumer()
        th_consumer.start()
        