import timeit

def performance(f):
	def fn(x):
		start_time = timeit.default_timer()
		f(x)
		end_time = timeit.default_timer()
		print('time cost: {0}'.format(end_time-start_time))
		return f(x)
	return fn
	
@performance
def f(n):
	return reduce(lambda x,y:x*y, range(1, n+1))

	
f(30000)
f(2)
f(999)