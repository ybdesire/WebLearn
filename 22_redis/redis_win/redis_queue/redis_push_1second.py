import redis_queue
import time


def main():
	q = redis_queue.RedisQueue('queue', 'localhost', 6379, 0)
	q.clear()
	count = 0
	while count<100000:
		count = count + 1
		time.sleep(1)
		q.set(count)
		print("queue size {0}".format(q.size()))
	
if __name__ == "__main__":
	main()