import mysql.connector

cnx = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Orxe568@#",
    database="greek_stats"
)

cursor = cnx.cursor()
query = "SELECT id,url,url_xlsx,csv_file_name,descr FROM source"
cursor.execute(query)

rows = cursor.fetchall()
for row in rows:
    id = row[0]
    url = row[1]
    url_xlsx = row[2]
    csv_filename = row[3]
    descr = row[4]
    print("id={}, url={}, url_xlsx={}, csv_filename={}, descr={}".format(
        id, url, url_xlsx, csv_filename, descr))

cursor.close()
cnx.close()
