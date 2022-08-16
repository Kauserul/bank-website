document.getElementById('sumbit-btn').addEventListener('click', function(e){
    const emailField = document.getElementById('user-email');
    const passwordField = document.getElementById('user-password');
    const email = emailField.value;
    const password = passwordField.value;
    // console.log(email, password);


    if(email === 'alibaba@bap.com' && password === '22.22'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Sorry, Something was Worng Please Go Out Here This is very Dengeraous Place')
    }
})