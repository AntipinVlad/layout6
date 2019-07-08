var cardDeck = document.querySelector('.card-deck');
var buttonDeck = document.querySelector('.button-deck');
var submitButton = document.querySelector('.submitButton');
var userName = document.querySelector('#userName');
var userEmail = document.querySelector('#userEmail');
var userMessage = document.querySelector('#userMessage');

submitButton.onclick = () => {
    event.preventDefault();

    let ref = Validation(userName, userMessage, userEmail);

    if (ref) {
        alert("Form successfully submitted")
        CleaningFrom();
    }
}

buttonDeck.onclick = function () {
    cardDeck.style.display = '';
    cardDeck.classList.add('animated', 'zoomIn');
    buttonDeck.style.display = 'none';
}

function Validation(userName, userMessage, userEmail) {
    var bool = 0;
    if (!userName.value) {
        userName.style.border = '2px solid red';
        bool--;
    } else {
        userName.style.border = '2px solid green';
    }
    if (!userEmail.value) {
        userEmail.style.border = '2px solid red';
        bool--;
    } else {
        userEmail.style.border = '2px solid green';
    }
    if (userMessage.value.length < 10) {
        userMessage.style.border = '2px solid red';
        userMessage.placeholder = "More 10 symbols"
        bool--;
    } else {
        userMessage.style.border = '2px solid green';
    }

    return bool === 0 ? true : false;
}

function CleaningFrom() {
    userName.value = '';
    userName.style.border = '';
    userEmail.value = '';
    userEmail.style.border = '';
    userMessage.value = '';
    userMessage.style.border = '';
}