import requests

FILENAME = '2.txt'


url = 'http://127.0.0.1:8000/upload/file={0}'.format(FILENAME)

data = open(FILENAME, 'rb')

# POST the data to url
r = requests.post(url, data)

print(r.text)
