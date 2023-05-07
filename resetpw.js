const resetPasswordForm = document.getElementById('resetpw');
resetPasswordForm.addEventListener('submit', resetPassword);

function resetPassword(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const oldPassword = document.getElementById('old-password').value;
  const newPassword = document.getElementById('new-password').value;

  const userString = localStorage.getItem(email);

  if (userString) {
    const user = JSON.parse(userString);

    if (oldPassword === user.password) {
      user.password = newPassword;

      localStorage.setItem(email, JSON.stringify(user));

      const resetPasswordSuccess = document.getElementById('reset-password-success');
      resetPasswordSuccess.textContent = 'Password reset successfully.';
      window.location.href = 'login.html';
    } else {

      const resetPasswordSuccess = document.getElementById('reset-password-success');
      resetPasswordSuccess.textContent = 'Incorrect email or old password. Please try again.';
    }
  } else {

    const resetPasswordSuccess = document.getElementById('reset-password-success');
    resetPasswordSuccess.textContent = 'Incorrect email or old password. Please try again.';
  }
}