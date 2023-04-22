import requests
import pandas as pd

# replace with the URL of the XLSX file you want to download
url = "https://www.bankofgreece.gr/OpenDataSetFilesALL/STATISTIKI/BoG_Travel_by_region_el_2023-03-31.xlsx"
# replace with the filename you want to save the downloaded file as
filename = "xlsx/BoG_Travel_by_region_el_2023-03-31.xlsx"

response = requests.get(url)
with open(filename, "wb") as f:
    f.write(response.content)

print("File downloaded successfully!")

# Load the XLSX file into a Pandas DataFrame
df = pd.read_excel(filename)

# Write the DataFrame to a CSV file
filename_csv = "csv/BoG_Travel_by_region_el_2023-03-31.csv"
df.to_csv(filename_csv, index=False)

print("File converted successfully!")
