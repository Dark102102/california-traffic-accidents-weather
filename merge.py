import pandas as pd

# ===============================
# LOAD DATASETS
# ===============================
ca_sample = pd.read_csv("ca_accidents_sample.csv")
weather_df = pd.read_csv("weather_ca_clean.csv")

print("Accident sample shape:", ca_sample.shape)
print("Weather data shape:", weather_df.shape)

# ===============================
# RESET INDEX
# ===============================
ca_sample = ca_sample.reset_index(drop=True)
weather_df = weather_df.reset_index(drop=True)

# ===============================
# MERGE (ROW-WISE)
# ===============================
merged_df = pd.concat([ca_sample, weather_df], axis=1)

print("Merged data shape:", merged_df.shape)
print(merged_df.head())

# ===============================
# SAVE MERGED DATA
# ===============================
merged_df.to_csv("accidents_weather_ca_merged.csv", index=False)

print("Merged dataset saved successfully")
