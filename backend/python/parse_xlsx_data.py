import mysql.connector
import requests
import pandas as pd


def get_xlsx_to_csv(url, csv_file):

    # replace with the URL of the XLSX file you want to download
    # url = "https://www.bankofgreece.gr/OpenDataSetFilesALL/STATISTIKI/BoG_Travel_by_region_el_2023-03-31.xlsx"
    # replace with the filename you want to save the downloaded file as
    filename = "xlsx/tmp.xlsx"

    response = requests.get(url)
    with open(filename, "wb") as f:
        f.write(response.content)

    print("File downloaded successfully!")

    # Load the XLSX file into a Pandas DataFrame
    df = pd.read_excel(filename)

    # Write the DataFrame to a CSV file
    # filename_csv = "csv/BoG_Travel_by_region_el_2023-03-31.csv"
    filename_csv = "csv/" + csv_file
    df.to_csv(filename_csv, index=False)

    print("File converted successfully!")


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
    get_xlsx_to_csv(url_xlsx, csv_filename)

cursor.close()
cnx.close()
