let billTypeEle = document.getElementById("billType");
let addBtnEle = document.getElementById("defaultModal");
let iconEle = document.getElementById("icons");
let shopErrorEle = document.getElementById("shopError");
let modalDescError = document.getElementById("modal-desc-error");
let formEle =  document.getElementById("form1");
let shopInputEleValue = document.getElementById("modal-shop-value");
let modalDescEleValue = document.getElementById("modal-desc");
let amountEleValue = document.getElementById("modal-amount-value");
let modalAmountError = document.getElementById("modal-amount-error");
let dateEleValue = document.getElementById("modal-date-value");
let modalDateError = document.getElementById("modal-date-error");

function clearErrorMessage() {
    shopErrorEle.textContent = "";
    modalDescError.textContent = "";
    shopInputEleValue.value = "";
    modalDescEleValue.value = "";
    amountEleValue.value="";
    modalAmountError.textContent="";
    dateEleValue.value = "";
    modalDateError.textContent = "";
    document.getElementById("successMessage").style.display = "none";
    formEle.style.display = "block";
  }
  
document.getElementById("exampleModal").addEventListener("hidden.bs.modal", function () {
    clearErrorMessage();
});

function validate() {
    if(shopInputEleValue.value === "") {
        shopErrorEle.textContent = "*Enter a label";
    } else {
        shopErrorEle.textContent = "";
    }

    if(modalDescEleValue.value === "") {
        modalDescError.textContent = "*Enter your description";
    } else {
        modalDescError.textContent = "";
    }

    if(amountEleValue.value === "" || isNaN(amountEleValue.value)) {
        modalAmountError.textContent = "*Invalid Input";
    } else {
        modalAmountError.textContent = "";
    }

    if(dateEleValue.value === "") {
        modalDateError.textContent = "*required";
    } else {
        modalDateError.textContent = "";
    }
}


if(formEle) {
    formEle.addEventListener("submit", function(event){
        event.preventDefault();
        let formData = new FormData(this);
        console.log(formData);

        if(shopInputEleValue.value !== "" && modalDescEleValue.value !== "" && amountEleValue.value !== "" && !isNaN(amountEleValue.value)  && dateEleValue.value !== ""){
            formEle.style.display = "none";
            document.getElementById("successMessage").style.display = "block";
        }
    })
}


let iconButton0 = document.getElementById("iconButton0");

if(iconButton0) {
    iconButton0.addEventListener("click", function() {
        shopInputEleValue.value = "BSNL Communication";
        modalDescEleValue.value = "Internet, Cable and landline";
        dateEleValue.value = "2024-02-01";
        billTypeEle.textContent = "Internet";
        amountEleValue.value = 590.00 + ".00";
        iconEle.innerHTML = '<i class="fa-solid fa-wifi pe-3"></i>';
    });
}

let iconButton = document.getElementById("iconButton");

if(iconButton) {
    iconButton.addEventListener("click", function() {
        shopInputEleValue.value = "KSEB LTD";
        modalDescEleValue.value = "Electricity Bill";
        dateEleValue.value = "2024-02-05";
        billTypeEle.textContent = "Electricity";
        amountEleValue.value = 2360 + ".00";
        iconEle.innerHTML = '<i class="fa-regular fa-lightbulb pe-3"></i>';
    });
}

let iconButton1 = document.getElementById("iconButton1");

if(iconButton1) {
    iconButton1.addEventListener("click", function() {
        shopInputEleValue.value = "Kerala State Water Authority";
        modalDescEleValue.value = "Water Bill";
        dateEleValue.value = "2024-02-07";
        billTypeEle.textContent = "Water";
        amountEleValue.value = 800 + ".00";
        iconEle.innerHTML = '<i class="fa-solid fa-droplet pe-3"></i>';
    });
}

let iconButton2 = document.getElementById("iconButton2");

if(iconButton2) {
    iconButton2.addEventListener("click", function() {
        shopInputEleValue.value = "KSEB LTD";
        modalDescEleValue.value = "Additional Electricity Bill";
        dateEleValue.value = "2024-02-15";
        billTypeEle.textContent = "Electricity";
        amountEleValue.value = 129+ ".00";
        iconEle.innerHTML = '<i class="fa-regular fa-lightbulb pe-3"></i>';
    });
}

if(addBtnEle) {
    addBtnEle.addEventListener("click", function() {
        billTypeEle.textContent = "Internet";
        iconEle.innerHTML = '<i class="fa-solid fa-wifi pe-3"></i>';
    });
}