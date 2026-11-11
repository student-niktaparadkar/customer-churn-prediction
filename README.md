# Customer Churn Prediction

A machine learning web application that predicts whether a customer is likely to churn based on their demographic, service, contract, and billing information.

The project uses a trained machine learning model with a **FastAPI backend** and an interactive **HTML, CSS, and JavaScript frontend**.

---

# Project Overview

Customer churn is an important problem for businesses because losing existing customers can negatively affect revenue.

This project predicts the likelihood of a customer leaving a service using customer information such as:

- Gender
- Senior citizen status
- Partner and dependents
- Tenure
- Phone and internet services
- Online security and backup
- Device protection
- Technical support
- Streaming services
- Contract type
- Payment method
- Monthly charges
- Total charges

The application returns:

- **Churn prediction**
- **Churn probability**

---

# Features

- Machine learning based churn prediction
- Churn probability calculation
- FastAPI REST API
- Pydantic data validation
- Interactive Swagger API documentation
- Modern responsive frontend
- Light pink and white user interface
- Visual churn-risk indicator
- Real-time prediction
- Model accuracy of approximately **80%**

---

# Technologies Used

# Machine Learning

- Python
- Pandas
- NumPy
- Scikit-learn
- Joblib

# Backend

- FastAPI
- Pydantic
- Uvicorn

# Frontend

- HTML
- CSS
- JavaScript

# Development Tools

- VS Code
- Jupyter Notebook
- Git
- GitHub

---

# Project Structure

```text
customer-churn-prediction/
│
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── prediction.py
│   └── schemas.py
│
├── dataset/
│   └── dataset files
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── models/
│   └── customer_churn_model.pkl
│
├── notebooks/
│   └── model development notebooks
│
├── .gitignore
├── requirements.txt
└── README.md
```

---

# Project Workflow

```text
Customer Data
      ↓
Frontend Form
      ↓
FastAPI API
      ↓
Pydantic Validation
      ↓
Feature Preparation
      ↓
Trained Machine Learning Model
      ↓
Churn Prediction
      ↓
Churn Probability
      ↓
Frontend Result
```

---

# Model Performance

The trained model achieved approximately:

| Accuracy | 80% |

The model also provides a probability score for each individual customer.

For example:

```text
Churn Probability: 84.2%
Prediction: Churn
```

** Model accuracy and churn probability are different metrics.

- 80% accuracy represents the overall performance of the model on evaluation data.
- 84.2% probability represents the estimated churn probability for one particular customer.

---

# Installation

# 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/customer-churn-prediction.git
```

# 2. Open the project

```bash
cd customer-churn-prediction
```

# 3. Create a virtual environment

```bash
python -m venv venv
```

# 4. Activate the virtual environment

For Windows:

```bash
venv\Scripts\activate
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

---

# Run the FastAPI Backend

Start the FastAPI server using:

```bash
uvicorn app.main:app --reload
```

The API will be available at:

```text
http://127.0.0.1:8000
```

---

# API Documentation

FastAPI provides automatic interactive API documentation.

Open:

```text
http://127.0.0.1:8000/docs
```

The main prediction endpoint is:

```text
POST /predict
```

---

# Run the Frontend

Open the `frontend` folder in VS Code.

You can run `index.html` using the **Live Server** extension.

The frontend sends customer information to:

```text
http://127.0.0.1:8000/predict
```

The prediction returned by the machine learning model is then displayed on the dashboard.

---

# Example Prediction

Example customer:

```text
Gender: Female
Senior Citizen: No
Partner: No
Dependents: No
Tenure: 2
Internet Service: Fiber optic
Contract: Month-to-month
Payment Method: Electronic check
Monthly Charges: 89.50
Total Charges: 179.00
```

Example result:

```text
Prediction: Churn
Churn Probability: 84.2%
```

---

# Application Screenshot

Add a screenshot of your frontend here.

For example:

```markdown
![Customer Churn Prediction Dashboard](screenshots/dashboard.png)
```

You can create a `screenshots` folder and put your dashboard screenshot inside it.

Your structure would then be:

```text
customer-churn-prediction/
│
├── screenshots/
│   └── dashboard.png
│
├── app/
├── dataset/
├── frontend/
├── models/
└── README.md
```

---

# Future Improvements

- Improve model accuracy
- Compare multiple classification algorithms
- Perform hyperparameter tuning
- Add feature importance visualization
- Add customer risk categories
- Add analytics dashboard
- Deploy FastAPI backend online
- Deploy frontend online
- Add database integration
- Add authentication

---

# Author

Computer Science & Engineering

---

# Project

If you find this project useful, feel free to star the repository.