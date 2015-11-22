## try Redis on Windows


1. download zip of Redis on Windows
https://github.com/dmajkic/redis/downloads

2. cd to redis-2.4.5-win32-win64\32bit

3. start redis server
> redis-server.exe redis.conf

4. start redis client
> redis-cli.exe -h localhost -p 6379

5. test redis cmd at client
> SET foo bar
> GET foo

---------------------------------------------
## try Redis on Windows by Python 3.4.3

1. install redis for py
> pip install redis

2. run redis_win/redis_basic.py
> py redis_basic.py

