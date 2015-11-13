def add1(x):
	return x+1
li = [1,2,3]	
r = list(map(add1,li))# for py 3.4.3
print(r)