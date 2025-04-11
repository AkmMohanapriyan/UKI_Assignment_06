// page scrool up function 

const btn =   document.querySelector('.scroll-up-btn');
btn.addEventListener('click', function() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
);

// contact form form validation function


const form = document.getElementById('signupForm');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
const ageRegex = /^(1[8-9]|[2-9][0-9]||100)$/;

form.addEventListener('submit', handleSubmit);
password.addEventListener('input', updateStrengthMeter);
togglePassword.addEventListener('click', togglePasswordVisibility);

function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}Error`);
    errorElement.textContent = message;
    errorElement.classList.add('show');
    input.style.borderColor = '#dc3545';
}

function clearError(input) {
    const errorElement = document.getElementById(`${input.id}Error`);
    errorElement.textContent = '';
    errorElement.classList.remove('show');
    input.style.borderColor = '#ddd';
}

function validateForm() {
    let isValid = true;
    clearError(username);
    clearError(email);
    clearError(password);
    clearError(confirmPassword);

        // username validation
        if (!usernameRegex.test(username.value)) {
            showError(username, 'Username must be 3-15 characters (letters and numbers only)');
            isValid = false;
        }
    
        // email validation
        if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
    
        // password Validation
        if (!passwordRegex.test(password.value)) {
            showError(password, 'Password must be 8+ characters with uppercase, number, and special character');
            isValid = false;
        }
    
        // confirm password Validation
        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, 'Passwords do not match');
            isValid = false;
        }

        return isValid;
    }

    
