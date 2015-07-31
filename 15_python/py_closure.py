def f():
	i=0
	def g():
		nonlocal i	
		print(i)
		i+=1

	return g

def main():
	x1 = f()
	x2 = f()
	x1()
	x1()
	x1()
	x2()
		
if __name__=='__main__':
	main()
		