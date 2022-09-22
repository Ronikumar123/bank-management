document.getElementById('btn-submit').addEventListener('click', function() {
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    // console.log(email, password);

    if (email == 'roni@gmail.com' && password == '1234') {
        window.location.href = 'bank.html';
    } else {
        alert('Invaild user and password')
    }

})