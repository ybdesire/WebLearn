import pymysql  

host = '10.0.0.0'
user = 'root'
password = 'passwd'
database = 'dbname'

def get_select_result(cur, table):
    cur.execute('select * from {} LIMIT 30000'.format(table))  
    data=cur.fetchall()
    
    for d in data:
        print(d)
    

if __name__ == '__main__':    
    try:
        conn=pymysql.connect(host=host, user=user, passwd=password, db=database, port=3306)
        cur=conn.cursor()

        get_select_result(cur, 'info')
        
        cur.close()
        conn.close() 
    except  Exception as e:
        print('exception')