from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import CustomerInput
from app.prediction import predict_churn

app = FastAPI(
    title="Customer Churn Prediction API",
    description="Machine Learning based churn prediction",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():

    return {
        "message": "Customer Churn Prediction API is running"
    }


@app.post("/predict")
def predict(customer: CustomerInput):

    customer_data = customer.model_dump()

    result = predict_churn(customer_data)

    if result["prediction"] == 1:
        status = "Customer is likely to churn"
    else:
        status = "Customer is likely to stay"

    return {
        "customer_status": status,
        "churn_prediction": result["prediction"],
        "churn_probability": result["churn_probability"]
    }