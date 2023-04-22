import csv
import json


def read_csv_to_json(filename):
    data = []
    with open(filename, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)
    json_data = json.dumps(data)
    return json_data
