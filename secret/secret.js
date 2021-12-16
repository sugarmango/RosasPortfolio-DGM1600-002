
function run(){
    var password = prompt("Please enter the password");
    if(password != 'greatestfriend'){
    document.body.innerHTML = '';
    document.body.innerHTML = 'Password Failed! Reload to Renter Password';
    } else {
    alert('Success');
    }
    }
    run();
