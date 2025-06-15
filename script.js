document.addEventListener('DOMContentLoaded', function (){
    //Step1: Form and feedback Division selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    //step2: Add submit event listener
    const username = document.getElementById('username').value.trim()
    const username = document.getElementById('email').value.trim()
    const username = document.getElementById('password').value.trim()

    //step4: Initialize validation flags
    let isValid = true;
    let messages =[]
    
    //step5: Validation logic 

    //Username check
    if (username.length < 3) {
        isValid = false;
        messages.push("Please enter a valid email address.")
    }

    //Password check
    if (password.length < 8) {
        isValid = false
        messages.push("Password must be atleast 8 characters lon.")
    }

    //step6: Display feedback
    feedbackDiv.style.display ='block'

    if (isValid) {
        feedbackDiv.textContent = "Registraion successful";
         feedbackDiv.style.color= "#27a745"; //green
    } else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = #dc3545; //red
    }

})