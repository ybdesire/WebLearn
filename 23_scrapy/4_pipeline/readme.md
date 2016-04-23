Use Item Pipeline
=================

http://doc.scrapy.org/en/latest/topics/item-pipeline.html


## Environment 

* OS: Windows 10
* Python: python 2.7
* Python 3rd libs
   * scrapy
   * virtualenv
   * pywin32:¡¡pip install pypiwin32


## Steps
### 1. copy project '2_items'

### 2. 'return item' at spider parse()

### 3. add pipline process code at pipelines.py
```
class HelloPipeline(object):
    def process_item(self, item, spider):
        print('--------------pipeline here-------------')
        return item
```

### 4. enable pipeline at settings.pypiwin32

```
ITEM_PIPELINES = {
   'hello.pipelines.HelloPipeline': 300,
}
```

### 5. Run spider and get result
```
WebLearn\23_scrapy\4_pipeline\hello>scrapy crawl hello
...
2016-04-19 13:32:22 [scrapy] DEBUG: Crawled (200) <GET http://www.dmoz.org/Computers/Programming/Languages/Python/Resour
ces/> (referer: None)
--------------pipeline here-------------
...
```