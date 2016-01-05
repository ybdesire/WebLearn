# -*- coding: utf-8 -*-
# python 3.4.3
import urllib.request           #get html content
import webbrowser               #open browser to display html
import codecs                   #encode
from bs4 import BeautifulSoup   #parse html
import re                       #regular expression

def main():
	html = getURLHtmlContent('http://esf.nanjing.fang.com/school-a0265/')
	displayHTMLAtBrowser(html)
    
def getURLHtmlContent(url):
	resp = urllib.request.urlopen(url)
	content = resp.read()
	html = content
	return html

def displayHTMLAtBrowser(html):
	f = codecs.open('hello.html', 'w', 'gb2312')
	f.write(html.decode('gb2312'))
	f.close()
	webbrowser.open_new_tab('hello.html')

def isContentFromTicketURL(ticketURL, contents):
	text = getCoreContentFromURL(ticketURL)
	for content in contents:
		if text.find(content)!=-1:
			return True
	return False

#get next page's url
def getNextPageFromURL(url):
	html = getURLHtmlContent(url)
	soup = BeautifulSoup(html)
	tag = soup.find(text=re.compile('上一页')).parent
	return 'http://bbs.nju.edu.cn/' + tag['href']

def getCoreContentFromURL(url):
	html = getURLHtmlContent(url)
	soup = BeautifulSoup(html)
	arr = soup.get_text().split('\n')
	narr = []
	for ele in arr:
		if(ele!='' and ele.startswith(':')==False):
			if ele=='--':
				break
			else:
				narr.append(ele)
	return (''.join(narr[4:len(narr)-1]))

def test():
	getURLHtmlContent('http://bbs.nju.edu.cn/bbscon?board=JobAndWork&file=M.1427248873.A&num=11887')

if __name__=='__main__':
	main()