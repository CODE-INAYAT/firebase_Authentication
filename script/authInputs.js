const registrationForm = document.getElementById('details-form').querySelector('form');
const accessForm = document.getElementById('access-form').querySelector('form');
const detailsFormDiv = document.getElementById('details-form');
const accessFormDiv = document.getElementById('access-form');
const loadingOverlay = document.getElementById('loading');
const successOverlay = document.getElementById('success');
const userNameSpan = document.getElementById('userName');
const loadingSpinner = document.getElementById('loadingSpinner');
const submitButton = accessForm.querySelector('#submitButton');
const buttonText = submitButton.querySelector('#buttonText');
const buttonArrow = submitButton.querySelector('#buttonArrow');

//Function to show infoModal 
let infoModalShown = false; // Flag to track if the modal was shown

// Function to show the info modal when the email input is clicked
function showInfoModal() {
    const infoModal = document.getElementById("infoModal");
    const emailInput = document.getElementById("email");

    if (!infoModalShown) {
        infoModal.style.display = "flex";
        emailInput.disabled = true;
        infoModalShown = true;
    }
}

// Function to hide the info modal
document.getElementById("iUnderstandBtn").addEventListener("click", function () {
    const infoModal = document.getElementById("infoModal");
    const emailInput = document.getElementById("email");

    infoModal.style.display = "none";
    emailInput.disabled = false;
    emailInput.focus();
});

// To disable browser suggestions for the email field
document.getElementById("email").setAttribute("autocomplete", "off");

// Input formatting functions
function convertToUpperCaseAndRemoveNumbers(input) {
    input.value = input.value.replace(/[0-9]/g, '').toUpperCase();
    input.setAttribute("maxlength", "30");
}

function convertToLowerCaseAndRemoveSpaces(input) {
    input.value = input.value.replace(/\s/g, '').toLowerCase();
    input.setAttribute("maxlength", "40");
}

function removeSpaces(input) {
    input.value = input.value.replace(/\s/g, '');
}
