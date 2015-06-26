import ftplib
import os

def upload(ftp, filename):
    file = open(filename, 'rb')
    ftp.storlines("STOR " + filename, file)
    file.close()

ftp = ftplib.FTP("127.0.0.1")
ftp.login('user', '12345')

upload(ftp, "3.txt")
