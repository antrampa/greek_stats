from flask import Flask
import csv
import json

app = Flask(__name__)


def read_csv_to_json(filename):
    data = []
    with open(filename, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)
    json_data = json.dumps(data)
    return json_data


@app.route('/')
def hello_world():
    return '<h1>Greek Stats API v1</h1>'


@app.route('/data')
def get_data():
    json_data = read_csv_to_json('csv/BoG_Travel_by_region_el_2023-03-31.csv')
    return json_data


if __name__ == '__main__':
    app.run()
