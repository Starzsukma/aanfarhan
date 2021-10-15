function validateForm(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('pswordd').value;
    var confpassword = document.getElementById('cpassword').value;
    var fullname = document.getElementById('fname').value;
    var genders = "";
    if(document.getElementById('male').checked==true)
        genders = 'male';
    else if(document.getElementById('female').checked==true)
        genders = 'female';
    else if(document.getElementById('other').checked==true)
        genders = 'other'
     var email = document.getElementById('Email').value;
    var age = document.getElementById('num').value;

    var usernamejs = true;
    if(username == ""){ 
    alert("Username must be filled!");
  usernamejs = false;
 }

    var passjs = true;
    if(password == ""){
        alert("Password must be filled!");
  passjs = false;
    }
    else if(password.length < 8){
        alert("Password must 8 characters!");
        passjs = false;
       }

    var conpassjs = true;
    if(confpassword == ""){
        alert("Confirm password must be filled!");
  conpassjs = false;
    }
    else if(confpassword.length < 8){
        alert("Password must 8 characters!");
        passjs = false;
       }
    var namejs = true;
    if(fullname == ""){
        alert("Full Name must be filled!");
  namejs = false;
    }

    var genderjs = true;
    if(genders==""){
        alert("Choose one gender!");
        genderjs = false;
    }
    var emailjs = true;
    if(email == ""){
		alert("Email must be filled!");
		emailjs = false;
	}

    var agejs = true;
    if(age==""){
        alert("Age must be filled!");
        agejs = false;
    }

    if(usernamejs && passjs && conpassjs && genderjs && agejs && namejs && emailjs){
        alert("Thankyou for Registration"); 
        location.replace("homepage.html");
    }
}