document.getElementById('login-submit').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value
    // get user password
    const passField = document.getElementById('user-pwd')
    const userPassword = passField.value
    // check email and password
    if(userEmail == 'sontan@baap.com'&& userPassword == 'secret'){
        window.location.href = 'banking.html'
    }
})
