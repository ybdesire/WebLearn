1. environment
Windows 7 + python 3.4.3

2. code layout
(1) redis_queue.py: 		queue module
(2) redis_push_1second.py: 	push data to queue every 1 second
(3) redis_pop_2seconds.py: 	get data from queue every 2 seconds

3. demo purpose
The demo simulate 2 clients connect to redis, 1 client push data to queue with high speed, another client read data from the same queue and process data wiht low speed.

4. how to run
(1)	start redis client
	> redis-cli.exe -h localhost -p 6379
(2)	run redis_push_1second.py (py1)
	> py redis_push_1second.py
(3)	run redis_pop_2seconds.py (py2)
	> py redis_pop_2seconds.py

Then we can see py1 write data into queue every second, and py2 read the data from the same queue by order.


