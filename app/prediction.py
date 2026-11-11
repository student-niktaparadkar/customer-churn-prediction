import joblib
import pandas as pd
import numpy as np

from pathlib import Path

MODEL_PATH = (
    Path(__file__).resolve().parent.parent
    / "models"
    / "customer_churn_model.pkl"
)

model = joblib.load(MODEL_PATH)


def predict_churn(customer_data):

    # Create a copy so we don't modify the original data
    customer_data = customer_data.copy()

    # Create the feature used during model training
    if customer_data["tenure"] == 0:
        customer_data["AverageMonthlyCharges"] = np.nan
    else:
        customer_data["AverageMonthlyCharges"] = (
            customer_data["TotalCharges"] /
            customer_data["tenure"]
        )

    # Convert input into DataFrame
    input_df = pd.DataFrame([customer_data])

    # Prediction
    prediction = model.predict(input_df)[0]

    # Probability
    probability = model.predict_proba(input_df)[0][1]

    return {
        "prediction": int(prediction),
        "churn_probability": round(float(probability), 4)
    }