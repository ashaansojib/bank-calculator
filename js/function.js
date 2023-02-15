document.getElementById("sing-button").addEventListener('click', function(){
    // get the first user name
    const userFirstName = getInputElementById("userField");
    // get the user name
    const userName = getInputElementById("nameField");
    // get the email
    const userEmail = getInputElementById("userEmail");
    // get the password value
    const userPassword = getInputElementById("userPassword");
    if(userFirstName === 'sojib' && userName === 'khan' && userEmail === 'sojib@bd' && userPassword === '9080'){
        window.location.href = 'account.html';
    }
    else{
        alert("Your Info is wrong");
    }
})