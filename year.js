// INPUT FROM HTML
var inputDay = document.querySelector(".input-date input");
var inputMonth = document.querySelector(".input-month input");
var inputYear = document.querySelector(".input-year input");

// LABEL SELETORS
var labelDay = document.querySelector(".input-date p");
var labelMonth = document.querySelector(".input-month p");
var labelYear = document.querySelector(".input-year p");

// ERROR SELETORS
var errorDay = document.querySelector(".input-date span");
var errorMonth = document.querySelector(".input-month span");
var errorYear = document.querySelector(".input-year span");

// OUTPUT SELETORS
var outputDay = document.getElementById("output-day");
var outputMonth = document.getElementById("output-month");
var outputYear = document.getElementById("output-year");

// BUTTON SELETOR
var btn = document.querySelector(".btn button");
let isdate, ismonth, isyear;

function validate() {
    if (inputDay.value.trim() === '') {
        labelDay.style.color = "#f00";
        errorDay.textContent = "requried field";
        inputDay.style.borderColor = "#f00";
        errorDay.style.color = "#f00";
        isdate = false;
    }
    else if (inputDay.value <= 0 || inputDay.value > 31 || isNaN(inputDay.value)) {
        labelDay.style.color = "#f00";
        errorDay.textContent = "invalid date";
        inputDay.style.borderColor = "#f00";
        errorDay.style.color = "#f00";
        isdate = false;
    }
    else {
        labelDay.style.color = "#0f0";
        errorDay.textContent = "VALID INPUT";
        inputDay.style.borderColor = "#0f0";
        errorDay.style.color = "#0f0";
        isdate = true;
    }
    if (inputMonth.value.trim() === '') {
        labelMonth.style.color = "#f00";
        errorMonth.textContent = "requried field";
        inputMonth.style.borderColor = "#f00";
        errorMonth.style.color = "#f00";
        ismonth = false;
    }
    else if (inputMonth.value <= 0 || inputMonth.value > 12 || isNaN(inputMonth.value)) {
        labelMonth.style.color = "#f00";
        errorMonth.textContent = "invalid month";
        inputMonth.style.borderColor = "#f00";
        errorMonth.style.color = "#f00";
        ismonth = false;
    }
    else {
        labelMonth.style.color = "#0f0";
        errorMonth.textContent = "VALID INPUT";
        inputMonth.style.borderColor = "#0f0";
        errorMonth.style.color = "#0f0";
        ismonth = true;
    }
    if (inputYear.value.trim() === '') {
        labelYear.style.color = "#f00";
        errorYear.textContent = "requried field";
        inputYear.style.borderColor = "#f00";
        errorYear.style.color = "#f00";
        isyear = false;
    }
    else if (inputYear.value <= 1969 || inputYear.value > 2023 || isNaN(inputYear.value)) {
        labelYear.style.color = "#f00";
        errorYear.textContent = "invalid year";
        inputYear.style.borderColor = "#f00";
        errorYear.style.color = "#f00";
        isyear = false;
    }
    else {
        labelYear.style.color = "#0f0";
        errorYear.textContent = "VALID INPUT";
        inputYear.style.borderColor = "#0f0";
        errorYear.style.color = "#0f0";
        isyear = true;
    }
}
btn.addEventListener("click", function () {
    validate();
    if (isdate && ismonth && isyear) {
        var userInput = `${inputYear.value}/${inputMonth.value}/${inputDay.value}`;
        var userInputObj = new Date(userInput);
        var todaysDate = new Date();
        var age = todaysDate - userInputObj;
        var agediff = new Date(age);
        var ageYear = agediff.getFullYear() - 1970;
        var ageMonths = agediff.getMonth();
        var ageDay = Math.abs(agediff.getDay() - 7);
        outputDay.textContent = ageDay;
        outputYear.textContent = ageYear;
        outputMonth.textContent = ageMonths;
        outputDay.style.color = "#703ddd";
        outputMonth.style.color = "#703ddd";
        outputYear.style.color = "#703ddd";
    }
    console.log(inputDay.value);
});
