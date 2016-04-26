"hello world" for scrapy
=========================

http://doc.scrapy.org/en/latest/intro/tutorial.html


## Environment 

* OS: Windows 10
* Python: python 2.7
* Python 3rd libs
   * scrapy
   * virtualenv
   * pywin32:¡¡pip install pypiwin32


## Steps
### 1. Create a scrapy project named "hello"

```
WebLearn\23_scrapy\hello_scrapy> scrapy startproject hello
```

### 2. Create Spider "hello_spider.py" under the hello/spiders directory
```python
import scrapy

class HelloSpider(scrapy.Spider):
    name = "hello"#identifies the Spider. It must be unique
    allowed_domains = ["dmoz.org"]
    start_urls = [
        "http://www.dmoz.org/Computers/Programming/Languages/Python/Books/",
        "http://www.dmoz.org/Computers/Programming/Languages/Python/Resources/"
    ]

    def parse(self, response):
        filename = response.url.split("/")[-2] + '.html'
        with open(filename, 'wb') as f:
            f.write(response.body)

```

### 3. Run Spider
```
23_scrapy\hello_scrapy\hello> scrapy crawl hello
```

### 4. Get Spider result

Two files craeted by spider under director 23_scrapy\hello_scrapy\hello:
* Books.html
* Resources.html
