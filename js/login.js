// --------------------------------Add eventLiestener with submit button-------------------
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: Get email
    const emailField = document.getElementById('E-mail');
    const email = emailField.value;
    // step--3: Get Password--------------------------------
  const passwordField = document.getElementById('user-password')
  const password = passwordField.value;
//   console.log(password)
//   console.log(email)

// Donot Verif email and password on this way
if(email == 'smonjurealahi111@gmail.com' && password==12345){
    // console.log("You are a valid user")
    window.location.href='bank.html'
}
    else{
        alert('You are not a valid users')
    }
})