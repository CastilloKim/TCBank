const registrationForm = document.getElementById('registration');
registrationForm.addEventListener('submit', validateRegistrationForm);

function validateRegistrationForm(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    const errorTable = document.getElementById('registration-errors');
    errorTable.innerHTML = `
      <tr>
        <td>Passwords do not match.</td>
      </tr>
    `;
  } else {
    const user = {
      email: email,
      password: password
    };

    localStorage.setItem(email, JSON.stringify(user));

    window.location.href = 'login.html';
  }
}