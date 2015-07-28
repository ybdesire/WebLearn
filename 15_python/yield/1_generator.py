#generator: only can be iterate once
def main():
	gen = (x*x for x in range(5))
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