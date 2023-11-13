console.log('login in js file');
document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
})
document.getElementById('btn-submit').addEventListener('click',function(){
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    console.log(pass);
})
