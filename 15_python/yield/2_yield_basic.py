#this is a generator function, because no return but yield
#generator function looks like a function but behaves like an iterator
def generator():
	for i in range(5):
		yield i*3

def main():
	gen = generator()
	#only can be iterated once
	for x in gen:
		print(x)
	for x in gen:
		print(x)	
	for x in gen:
		print(x)
	for x in gen:
		print(x)	
if __name__=='__main__':
	main()