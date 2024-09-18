document.addEventListener('DOMContentLoaded', () => {
    const loginBox = document.querySelector('.login-box');
    const registerBox = document.querySelector('.register-box');
    
    // Show login box by default
    loginBox.classList.add('active');

    window.toggleForm = () => {
        loginBox.classList.toggle('active');
        registerBox.classList.toggle('active');
    };
    
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Login gegevens verzonden!');
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Registratie gegevens verzonden!');
    });
});
