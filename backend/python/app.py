# from flask import Flask
from flask import Flask, jsonify, request
import csv
import json
import mysql.connector

app = Flask(__name__)


def read_csv_to_json(id):
    cnx = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Orxe568@#",
        database="greek_stats"
    )
    cursor = cnx.cursor()
    query = "SELECT id,csv_file_name FROM source WHERE id = %s"
    cursor.execute(query, (id,))
    rows = cursor.fetchall()
    data = []
    csv_filename = "csv/"
    for row in rows:
        id = row[0]
        csv_filename = "csv/" + row[1]
        # data.append({"id": id, "csv_filename": csv_filename})
    json_data = json.dumps(data)
    cursor.close()
    cnx.close()
    with open(csv_filename, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)
    json_data = json.dumps(data)
    return json_data


@app.route('/')
def hello_world():
    return '<h1>Greek Stats API v1</h1>'


@app.route('/api/data')
def get_data():
    id = request.args.get('id')
    json_data = read_csv_to_json(id)
    return json_data


@app.route('/api/')
def get_Links():

    cnx = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Orxe568@#",
        database="greek_stats"
    )

    cursor = cnx.cursor()
    query = "SELECT id,descr,url,url_xlsx,csv_file_name,text FROM source ORDER BY sort"
    cursor.execute(query)
    rows = cursor.fetchall()
    data = []
    for row in rows:
        id = row[0]
        descr = row[1]
        url = row[2]
        url_xlsx = row[3]
        csv_file_name = row[4]
        link = "http://{}/api/data?id={}".format(request.host, id)
        text = row[5]
        data.append({"id": id, "descr": descr,
                    "url": url, "url_xlsx": url_xlsx,
                     "csv_file_name": csv_file_name,
                     "link": link, "text": text})
    json_data = json.dumps(data)
    cursor.close()
    cnx.close()
    return json_data


if __name__ == '__main__':
    app.run()
