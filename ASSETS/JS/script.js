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


const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const togglePassword = document.getElementById('togglePassword');
const strengthBar = document.getElementById('strengthBar');
const successMessage = document.getElementById('successMessage');
const ageInput = document.getElementById('age');
const ageError = document.getElementById('ageError');

// Regex patterns
const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
const ageRegex = /^(1[8-9]|[2-9][0-9]||100)$/;

// Event Listeners
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
    clearError(age);

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

    // age Validation
    if (!ageRegex.test(ageInput.value)) {
        showError(age, 'Please enter a valid age between 18 and 100.');
        isValid = false;

    }

    return isValid;
}

function updateStrengthMeter() {
    const value = password.value;
    let strength = 0;

    if (value.length >= 8) strength += 33;
    if (/[A-Z]/.test(value)) strength += 33;
    if (/[0-9]/.test(value)) strength += 17;
    if (/[!@#$%^&*]/.test(value)) strength += 17;

    strengthBar.style.width = `${Math.min(strength, 100)}%`;
    if (strength < 50) {
        strengthBar.style.background = 'red'; // Weak - Red
    } else if (strength < 80) {
        strengthBar.style.background = 'orange'; // Medium - Orange
    } else {
        strengthBar.style.background = 'green'; // Strong - Green
    }
}

function togglePasswordVisibility() {
    const type = password.type === 'password' ? 'text' : 'password';
    password.type = type;
    togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
}

function handleSubmit(e) {
    e.preventDefault();
    
    if (validateForm()) {
        // Save to localStorage
        const userData = {
            username: username.value,
            email: email.value
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        // alert("Registration Successfull!");


        // Show success message
        successMessage.classList.add('show');
        
        
        // Reset form
        setTimeout(() => {
            form.reset();
            strengthBar.style.width = '0%';
            successMessage.classList.remove('show');
        }, 2000);
    } else {
        // Scroll to first invalid input
        const firstInvalid = form.querySelector('.error.show');
        if (firstInvalid) {
            firstInvalid.parentElement.querySelector('input').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
}
