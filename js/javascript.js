
// var firstNameInput = document.getElementById('first-name');

// document.querySelector('form#form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     console.log(firstNameInput.value);    
// });



let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let emailInput = document.getElementById('input-email');

document.querySelector('form#form').addEventListener('submit', function (e) {
    e.preventDefault();

    console.log(firstNameInput.value, lastNameInput.value, emailInput.value);   
});
