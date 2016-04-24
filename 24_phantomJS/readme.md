# **PhantomJS** introduction

http://phantomjs.org/
* PhantomJS is a headless WebKit scriptable with a JavaScript API. 
* It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG.
* Windows/MacOS/Linux build: http://phantomjs.org/download.html
* Examples: http://phantomjs.org/examples/


# Mine examples

My environment is Windows.


## 1_hello.js

Run 1_hello.js at Windows cmd line, and get output at cmd:

```bash
> phantomjs.exe 1_hello.js
Hello, world!
```


## 2_colorwheel.js

Run js at Windows cmd line, and get output 'colorwheel.png' :

```bash
> phantomjs.exe 2_colorwheel.js
```


## 3_network


### 1_detectsniff.js
Run js at Windows cmd line, check if http://stackoverflow.com/ page tried to sniff the user agent :

```bash
>phantomjs.exe 3_network\1_detectsniff.js http://stackoverflow.com/
Checking http://stackoverflow.com/...
The page tried to sniff the user agent.
```


### 2_loadspeed.js

Check page load time of http://stackoverflow.com/
```bash
>phantomjs.exe 3_network\2_loadspeed.js http://stackoverflow.com/
Page title is Stack Overflow
Loading time 9254 msec
```


### 3_netlog.js

All HTTP request/response headers for accessing http://google.com/. Result at 1.txt.
The process for accessing URL included:

* GET HTML page at URL
* parse HTML
* GET JS
* GET images
... 

```bash
>phantomjs.exe 3_network\3_netlog.js http://google.com/ > 1.txt
```


### 4_get_cookie.js

Get all cookies after page loaded completly for https://www.apkfiles.com/apk-475836/clash-of-spartan-hd-update
The cookie may from HTTP header, or set by loaded JS.
 
```bash
>phantomjs.exe 3_network\4_get_cookie.js  
Listing cookies:
_gat=1
_ga=GA1.2.1955349763.1460971301
PHPSESSID=71q38euv8c1t60r358riknh3u3
```


