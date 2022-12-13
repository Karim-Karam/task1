let userinput = document.querySelector("[name ='username']");
let emailinput = document.querySelector("[name ='email']");
let passinput = document.querySelector("[name ='pass']"); 
let copassinput = document.querySelector("[name ='copass']"); 


document.forms[0].onsubmit = function (e) {
    let username = false;
    let useremail = false;
    let userpass = false;
    let usercopass = false;

    function allletter(userinput) {
      var letters = /^[A-Za-z0-9]*$/;
      if (userinput.value.match(letters)) {
        return false;
      } else {
        return true;
      } 
    }

    if (userinput.value =="") {
        userinput.after("this field is requierd");
    }else if(userinput.value.length <= 5){
        userinput.after("Username must consist of 5 to 15 characters");
    }else if(userinput.value.length >= 15){
        userinput.after("Username must consist of 5 to 15 characters");
    }else if(allletter(userinput)){
        userinput.after("only letters and numbers are allowed");
    }else{
        username= true;
    }


    if (emailinput.value =="") {
        emailinput.after("this field is requierd");
    }else{
        useremail= true;
    }

    if (passinput.value =="") {
        passinput.after("this field is requierd");
    }else if(passinput.value.length < 8){
        passinput.after("Password must be at least 8 characters");
    }else{
        userpass= true;
    }



    if (copassinput.value =="") {
        copassinput.after("this field is requierd");
    }else if(copassinput.value != passinput.value){
        copassinput.after("Password not identical ");
    }else{
        usercopass= true;
    }



    if (username===false || useremail===false || userpass===false || usercopass===false ) {
        e.preventDefult();
    }else{
        document.forms[0].action="succeed.html";
    }
};