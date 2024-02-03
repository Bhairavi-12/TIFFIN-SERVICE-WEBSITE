const loginLink = document.querySelector('.signup-link a');
const signupLink = document.querySelector('.back-link a');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginLink.addEventListener('click', () => {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

signupLink.addEventListener('click', () => {
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});