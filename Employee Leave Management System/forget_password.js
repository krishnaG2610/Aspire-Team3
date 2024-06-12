function validateForm() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const errorMessage = document.getElementById('error-message');

  errorMessage.textContent = '';  // Clear previous error message

  if (password.length < 6) {
    errorMessage.textContent = 'Password must be at least 6 characters long.';
    return false;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match.';
    return false;
  }

  // If all conditions pass, return true
  return true;
}
