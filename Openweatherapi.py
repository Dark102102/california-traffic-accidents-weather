import pandas as pd
import requests
import time

API_KEY = "[ENCRYPTION_KEY]"


def get_weather(lat, lon):
    url = (
        f"https://api.openweathermap.org/data/2.5/weather?"
        f"lat={lat}&lon={lon}&appid={API_KEY}&units=imperial"
    )
    r = requests.get(url)
    return r.json() if r.status_code == 200 else None


# =====================================
# SAFE EARLY-STOP CHUNK READING
# =====================================
use_cols = ["State", "Start_Lat", "Start_Lng", "Start_Time", "Severity"]

chunks = pd.read_csv(
    "US_Accidents_March23.csv",
    usecols=use_cols,
    chunksize=50_000,          # smaller chunks
    engine="python"            # IMPORTANT: avoids C-parser freeze
)

ca_rows = []

for chunk in chunks:
    ca_chunk = chunk[chunk["State"] == "CA"]
    ca_rows.append(ca_chunk)

    # STOP once we have enough rows
    if sum(len(x) for x in ca_rows) >= 1000:
        break

ca_df = pd.concat(ca_rows, ignore_index=True)

print("California rows collected:", ca_df.shape)


# =====================================
# SAMPLE FOR API
# =====================================
ca_sample = ca_df.sample(n=500, random_state=42)
ca_sample = ca_sample[["Start_Lat", "Start_Lng", "Start_Time", "Severity"]]
ca_sample.to_csv("ca_accidents_sample.csv", index=False)
print("ca_accidents_sample.csv saved")


print("Sample ready:", ca_sample.shape)


# # =====================================
# # API CALLS
# # =====================================
# weather_data = []

# for i, row in ca_sample.iterrows():
#     weather = get_weather(row["Start_Lat"], row["Start_Lng"])

#     if weather:
#         weather_data.append({
#             "lat": row["Start_Lat"],
#             "lon": row["Start_Lng"],
#             "weather_main": weather["weather"][0]["main"],
#             "weather_desc": weather["weather"][0]["description"],
#             "temp_f": weather["main"]["temp"],
#             "humidity": weather["main"]["humidity"],
#             "visibility": weather.get("visibility"),
#             "wind_speed": weather["wind"]["speed"],
#             "rain_1h": weather.get("rain", {}).get("1h", 0)
#         })

#     time.sleep(1)

#     if i % 50 == 0:
#         print(f"Processed {i} API calls")


# # =====================================
# # SAVE WEATHER DATA
# # =====================================
# weather_df = pd.DataFrame(weather_data)
# weather_df.to_csv("weather_ca_clean.csv", index=False)

# print("✅ weather_ca_clean.csv created")
# print(weather_df.head())
