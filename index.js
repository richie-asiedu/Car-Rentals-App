const loginBtn = document.getElementById('btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const container = document.getElementById('login-container');

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

loginBtn.addEventListener('mouseover', () =>{
    if (loginBtn.disabled) {
        const randomX = Math.floor(Math.random() * 150);
        const randomY = Math.floor(Math.random() * 150);
        loginBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
});

function validateForm() {
    if (emailInput.value && passwordInput.value) {
        loginBtn.disabled = false;
        loginBtn.style.transform = "translate(0, 0)"
    } else {
        loginBtn.disabled = true;
    }
}