ENV:	python 3.4 + django 1.8.2

Download:
	start server, and access http://127.0.0.1:8000/download/file=1.txt
	Download file with Unicode file name:
		http://127.0.0.1:8000/download/file=%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6.txt

Upload:
	start server, and run post_file.py
	file can be modified at post_file.py
