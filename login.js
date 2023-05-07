const loginForm = document.getElementById('login');
loginForm.addEventListener('submit', validateLoginForm);


function validateLoginForm(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const userString = localStorage.getItem(email);

  if (userString) {
    const user = JSON.parse(userString);

    if (password === user.password) {
      window.location.href = 'accounts.html';
    } else {
      const loginError = document.getElementById('login-error');
      loginError.textContent = 'Incorrect email or password. Please try again.';
    }
  } else {
    const loginError = document.getElementById('login-error');
    loginError.textContent = 'Incorrect email or password. Please try again.';
  }
}