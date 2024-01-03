from push_api_clientpy import Source, DocumentBuilder, BackoffOptions
import pandas as pd
import json
from datetime import datetime

# Load the CSV file
df = pd.read_csv('data.csv')

source = Source("xx155aba1c-eb71-4f3a-9f63-551096cd0cb8", "poclabsplaygroundv6cjujq7")

# Loop over each row in the DataFrame, minus one row
for index, row in df.iloc[:-1].iterrows():
    # Convert the row to a JSON string
    #row_json = json.dumps(row.to_dict())
    print(f"Row {index}")

    id_str = str(row['ID'])
    app_name_str = str(row['App Name'])

    myDocument = DocumentBuilder("https://connor-two.vercel.app/apps/"+id_str, app_name_str)\
        .withData(str(row['Recipe Use Case'])+" lmfao")\
        .withMetadata({
            "App Name": str(row["App Name"]),
            "ID": str(row["ID"]),
            "Repo Link": str(row["Repo Link"]),
            "App Description": str(row["App Description"]),
            "Industries": str(row["Industries"]),
            "App Use Case": str(row["App Use Case"]),
            "Business Value": str(row["Business Value"]),
            "Logo": str(row["Logo"]),
            "Recipe Use Case": str(row["Recipe Use Case"]),
            "Prerequisites": str(row["Prerequisites"]),
            "Instructions": str(row["Instructions"]),
            "Reference": str(row["Reference"]),
            "Limitations": str(row["Limitations"]),
            "Source JSON Configuration": str(row["Source JSON Configuration"]),
            "IPE": str(row["IPE"]),
            "Rating": str(row["Rating"]),
            "Reviews": str(row["Reviews"]),
            "Created by": str(row["Created by"]),
            "Number of installations": str(row["Number of installations"]),
            "Date created": str(row["Date created"]),
            "Last edit date": str(row["Last edit date"]),
            })
    
    source.addOrUpdateDocument("poclabsplaygroundv6cjujq7-xkwv5idkafjz4ei2wioi2psmee", myDocument)

print(f"Great success!")






