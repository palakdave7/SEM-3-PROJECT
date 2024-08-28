document.addEventListener('DOMContentLoaded', function () {

  const forgotPasswordForm = document.getElementById('forgotPasswordForm');

  forgotPasswordForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('forgotEmail').value;

    if (email) {
      // Implement the logic for sending the password reset link.
      // This might involve sending the email to your server or API endpoint.

      // For now, just log the email to the console
      console.log('Password reset link sent to:', email);

      // Show a success message or redirect to another page
      alert('A password reset link has been sent to your email address.');

      // Close the modal after submission
      const modal = bootstrap.Modal.getInstance(document.getElementById('forgotPasswordModal'));
      modal.hide();
    } else {
      alert('Please enter a valid email address.');
    }
  });

  const showSignUpLink = document.getElementById('showSignUpLink');
  const showSignInLink = document.getElementById('showSignInLink');
  const signInForm = document.getElementById('signInForm');
  const signUpForm = document.getElementById('signUpForm');

  // Ensure the sign-up form starts hidden
  signUpForm.classList.add('d-none');

  showSignUpLink.addEventListener('click', function (e) {
    e.preventDefault();
    signInForm.classList.add('d-none');
    signUpForm.classList.remove('d-none');
  });

  showSignInLink.addEventListener('click', function (e) {
    e.preventDefault();
    signUpForm.classList.add('d-none');
    signInForm.classList.remove('d-none');
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById('form2Example2_signup');
  const confirmPasswordInput = document.getElementById('form2Example2_confirm');
  const passwordHelp = document.getElementById('passwordHelp');

  // Regular expression for password validation: at least 8 characters, including one special character
  const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  // Show the message when the password input is focused
  passwordInput.addEventListener('focus', function () {
    passwordHelp.classList.remove('d-none');
    passwordHelp.classList.add('show');
  });

  // Function to validate password
  function validatePassword() {
    if (passwordRegex.test(passwordInput.value)) {
      passwordHelp.classList.add('d-none');
      passwordHelp.classList.remove('show');
      return true;
    } else {
      passwordHelp.classList.remove('d-none');
      passwordHelp.classList.add('show');
      return false;
    }
  }

  // Function to validate confirm password
  function validateConfirmPassword() {
    if (confirmPasswordInput.value === passwordInput.value) {
      return true;
    } else {
      return false;
    }
  }

  // Prevent moving to the confirm password block if the password is invalid
  passwordInput.addEventListener('blur', function (e) {
    if (!validatePassword()) {
      e.preventDefault();
      e.stopImmediatePropagation();
      passwordInput.focus(); // Keep focus on the password input
    }
  });

  // Prevent focus from moving to confirm password if the password is invalid
  confirmPasswordInput.addEventListener('focus', function (e) {
    if (!validatePassword()) {
      e.preventDefault();
      e.stopImmediatePropagation();
      passwordInput.focus(); // Keep focus on the password input
    }
  });

  // Validate confirm password when the user types in it
  confirmPasswordInput.addEventListener('input', function () {
    if (validateConfirmPassword()) {
      confirmPasswordInput.classList.remove('is-invalid');
    } else {
      confirmPasswordInput.classList.add('is-invalid');
    }
  });
});

