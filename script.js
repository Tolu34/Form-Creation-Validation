document.addEventListener('DOMContentLoaded', function () {
  // Step 1: Form and Feedback Division Selection
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Step 2: Add submit event listener
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Step 3: Retrieve and trim input values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Step 4: Initialize validation flags
    let isValid = true;
    let messages = [];

    // Step 5: Validation logic

    // Username check
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email check
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Password check
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Step 6: Display feedback
    feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // green
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // red
    }
  });
});