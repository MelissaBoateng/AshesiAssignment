function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validate() {
    // Retrieving the values of form elements 
    var f_name = document.newForm.f_name.value;
    var M_name = document.newForm.M_name.value;
    var l_name = document.newForm.l_name.value;
    var email = document.newForm.email.value;
    var Address = document.newForm.Address.value;
    var TelNumber = document.newForm.TelNumber.value;
    var gender = document.newForm.gender.value;


    }
    
	// Defining error variables with a default value
    var first = Middle = last= emailE = TelNumberE = AddressE= genderE = true;
    
    // Validate name
    if(f_name == "") {
        printError("first", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(f_name) === false) {
            printError("first", "Please enter a valid name");
        } else {
            printError("first", "");
            first = false;
        }
    }
    if(M_name == "") {
        printError("Middle", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(M_name) === false) {
            printError("Middle", "Please enter a valid name");
        } else {
            printError("Middle", "");
            Middle = false;
        }
    }
    if(l_name == "") {
        printError("last", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(l_name) === false) {
            printError("nlast", "Please enter a valid name");
        } else {
            printError("last", "");
            last = false;
        }
    }
    
  
    if(email == "") {
        printError("emailE", "Please enter your email address");
    } else {
     
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailE", "Please enter a valid email address");
        } else{
            printError("emailE", "");
            emailE = false;
        }
    }
    
   
    if(TelNumber == "") {
        printError("TelNumberE", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(TelNumber) === false) {
            printError("TelNumberE", "Please enter a valid 10 digit mobile number");
        } else{
            printError("TelNumberE", "");
            TelNumber = false;
        }
    }
    
   
    if(gender == "") {
        printError("genderE", "Please select your gender");
    } else {
        printError("genderE", "");
        genderE = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((first ||Middle||last|| emailE ||TelNumberE || AddressE || genderE) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + f_name +  l_name + M_name + "\n"
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " +TelNumber + "\n" +
                          "Gender: " + gender + "\n";
      
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};