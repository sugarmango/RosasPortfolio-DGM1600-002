
function run(){
    var password = prompt("Password Please");
    if(password != 'greatestfriend'){
    document.body.innerHTML = '';
    document.body.innerHTML = 'Password Failed! Reload to Renter Password';
    }else{
    alert('Success');
    }
    }
    run();