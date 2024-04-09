const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
document.getElementById("login-button").addEventListener("click", function() {
    window.location.href = "index.html";
  });
//document.getElementById('signupForm').addEventListener('submit', function (e) {
    //e.preventDefault(); // Prevent form submission (to handle it with JavaScript)

    // Process form data (validation, database insertion, etc.)
    // For demonstration purposes, let's assume successful processing.

    // Redirect to the main page (index.html)
    //window.location.href = 'index.html';});