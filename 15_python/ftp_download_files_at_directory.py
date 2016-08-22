import ftplib
from tqdm import *

ftp = ftplib.FTP('10.10.01.01')
ftp.login('username', 'password')# connect to ftp
ftp.cwd('/download/money/')
files = ftp.nlst()# get files in the directory '/download/money/'

# download all files to dest_directory/
for f in tqdm(files):
    with open('dest_directory/{}'.format(f), 'wb') as fg:
        ftp.retrbinary('RETR {}'.format(f), fg.write)

ftp.quit()
