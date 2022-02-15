document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password 
    const passwordFiel = document.getElementById('user-password');
    const userPassword = passwordFiel.value;

    if (userEmail == 'sontan@bap.com' && userPassword == 'secrit') {
        window.location.href = 'banking.html'
    }
})