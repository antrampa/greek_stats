import csv
import json


def csv_to_json(csv_path):
    data = []
    with open(csv_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)
    return json.dumps(data)


# Example usage
csv_file = 'csv/BoG_Travel_by_region_el_2023-03-31.csv'
json_data = csv_to_json(csv_file)
print(json_data)
