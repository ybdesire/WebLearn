Use Items
==========

http://doc.scrapy.org/en/latest/intro/tutorial.html#using-our-item

## Environment 

* OS: Windows 10
* Python: python 2.7
* Python 3rd libs
   * scrapy
   * virtualenv
   * pywin32:¡¡pip install pypiwin32


## Steps
### 1. copy project 'hello'


### 2. define items at items.py

http://doc.scrapy.org/en/latest/intro/tutorial.html#defining-our-item


### 3. Use items at hello_spider.py

http://doc.scrapy.org/en/latest/intro/tutorial.html#using-our-item


### 4. Run spider and get result
```
WebLearn\23_scrapy\2_items\hello> scrapy crawl hello
...
{'desc': [u'\r\n\t\r\n ',
          u' \r\n\t\t\t\r\n   - By David Mertz; Addison Wesley. Book in progress, full text, ASCII format. Asks for feedback. [author website, Gnosis Software, Inc.]\r\n                                \r\n',
          u'\r\n'],
 'link': [u'http://gnosis.cx/TPiP/'],
 'title': [u'Text Processing in Python']}
...
```