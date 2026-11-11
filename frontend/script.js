const form = document.getElementById("churnForm");

const resultPlaceholder =
    document.getElementById("resultPlaceholder");

const resultContent =
    document.getElementById("resultContent");

const predictBtn =
    document.getElementById("predictBtn");

const buttonText =
    document.getElementById("buttonText");

const statusText =
    document.getElementById("statusText");

const probabilityText =
    document.getElementById("probabilityText");

const probabilityValue =
    document.getElementById("probabilityValue");

const predictionValue =
    document.getElementById("predictionValue");

const resultDescription =
    document.getElementById("resultDescription");

const resetBtn =
    document.getElementById("resetBtn");

const riskMeter =
    document.getElementById("meterProgress");


const API_URL =
    "http://127.0.0.1:8000/predict";


form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const customerData = {

        gender:
            document.getElementById("gender").value,

        SeniorCitizen:
            Number(
                document.getElementById("SeniorCitizen").value
            ),

        Partner:
            document.getElementById("Partner").value,

        Dependents:
            document.getElementById("Dependents").value,

        tenure:
            Number(
                document.getElementById("tenure").value
            ),

        PhoneService:
            document.getElementById("PhoneService").value,

        MultipleLines:
            document.getElementById("MultipleLines").value,

        InternetService:
            document.getElementById("InternetService").value,

        OnlineSecurity:
            document.getElementById("OnlineSecurity").value,

        OnlineBackup:
            document.getElementById("OnlineBackup").value,

        DeviceProtection:
            document.getElementById("DeviceProtection").value,

        TechSupport:
            document.getElementById("TechSupport").value,

        StreamingTV:
            document.getElementById("StreamingTV").value,

        StreamingMovies:
            document.getElementById("StreamingMovies").value,

        Contract:
            document.getElementById("Contract").value,

        PaperlessBilling:
            document.getElementById("PaperlessBilling").value,

        PaymentMethod:
            document.getElementById("PaymentMethod").value,

        MonthlyCharges:
            Number(
                document.getElementById("MonthlyCharges").value
            ),

        TotalCharges:
            Number(
                document.getElementById("TotalCharges").value
            )
    };


    predictBtn.disabled = true;

    buttonText.textContent =
        "Analyzing Customer...";


    try {

        const response = await fetch(
            API_URL,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(customerData)
            }
        );


        if (!response.ok) {

            const error = await response.json();

            console.error(error);

            throw new Error(
                "Prediction failed"
            );
        }


        const data =
            await response.json();


        showResult(data);


    } catch (error) {

        console.error(error);

        alert(
            "Unable to connect to FastAPI. " +
            "Please make sure the backend is running."
        );

    } finally {

        predictBtn.disabled = false;

        buttonText.innerHTML =
            "✦ &nbsp; Predict Customer Churn";
    }

});


function showResult(data) {

    resultPlaceholder.style.display =
        "none";

    resultContent.style.display =
        "block";


    const prediction =
        data.churn_prediction;

    const probability =
        Number(data.churn_probability) * 100;


    probabilityText.textContent =
        probability.toFixed(1) + "%";

    probabilityValue.textContent =
        probability.toFixed(1) + "%";


    predictionValue.textContent =
        prediction === 1
            ? "Churn"
            : "Stay";


    statusText.textContent =
        prediction === 1
            ? "Churn"
            : "Stay";


    if (prediction === 1) {

        resultDescription.textContent =
            "This customer has a higher likelihood of leaving. " +
            "Consider offering personalized incentives or improving their service experience.";

    } else {

        resultDescription.textContent =
            "This customer is predicted to remain with the service. " +
            "Their current profile indicates relatively low churn risk.";

    }


    /*
       Update circular meter
    */

    const degrees =
        probability * 3.6;


    riskMeter.style.background =
        `conic-gradient(
            #e96a9a ${degrees}deg,
            #f7edf1 ${degrees}deg
        )`;


    resultContent.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


resetBtn.addEventListener(
    "click",
    function () {

        resultContent.style.display =
            "none";

        resultPlaceholder.style.display =
            "block";

        form.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);