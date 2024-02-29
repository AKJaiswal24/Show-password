const showHide = document.getElementById('show-hide');
let passwordInput = document.getElementById('password');

showHide.addEventListener('click', function () {
    showHide.classList.toggle('show');

    if (showHide.classList.contains('show')) {
        showHide.classList.remove('fa-eye-slash');
        showHide.classList.add('fa-eye');
        passwordInput.setAttribute('type', 'text');
    }
    else {
        showHide.classList.add('fa-eye-slash');
        showHide.classList.remove('fa-eye');
        passwordInput.setAttribute('type', 'password');
    }
});