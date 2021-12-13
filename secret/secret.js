
function run(){
    var password = prompt("Enter the Password Please");
    if(password != 'gf'){
    document.body.innerHTML = '';
    document.body.innerHTML = 'Password Failed! Reload to Renter Password';
    }else{
    alert('Success');
    }
    }
    run();
