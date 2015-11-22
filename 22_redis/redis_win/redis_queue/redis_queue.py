import redis

class RedisQueue(object):
	def __init__(self, queue_name, redis_host, redis_port, redis_db):
		self.__db = redis.StrictRedis(host=redis_host, port=redis_port, db=redis_db)
		self.key = queue_name
		
	def set(self, value):
		self.__db.rpush(self.key, value)
		
	
	def get(self, block=True, timeout=None):
		if block:
			item = self.__db.blpop(self.key, timeout=timeout)
		else:
			item = self.__db.lpop(self.key)
		return item

	def size(self):
		return self.__db.llen(self.key)
	
	def clear(self):#empty the queue
		while(self.size()!=0):
			self.get()
			