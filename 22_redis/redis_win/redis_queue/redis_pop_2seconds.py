import redis_queue
import time


def main():
	q = redis_queue.RedisQueue('queue', 'localhost', 6379, 0)
	count = 0
	while count<100000:
		count = count + 1
		time.sleep(2)
		print(q.get())
	
if __name__ == "__main__":
	main()