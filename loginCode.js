function credentialValidation(){
    console.log("credentialValidation() started");
    //This will Run The credentials validation
    var firstName = document.getElementById("fName").value;
    //This will give the login credential validation a first name in the login status when running credential validation
    var lastName = document.getElementById("lName").value;
    //This will give the login credential validation a lasst name in the login status when running credential validation
    var fullName = firstName + " " + lastName;
    //This will give the login credential validation a full name in the login status when running credential validation
    var badgenumb = document.getElementById("badgeID").value;
    //This will give the login credential validation a Badge ID in the login status when running credential validation

    //validate fullname
    if(fullName.length > 20 || fullName.length < 2){
        document.getElementById("loginStatus").innerHTML = "Invalid Full Name Login Credentials, Please Resubmit";
        //This gives the Full Name a limit on how many characters it will validate for the full name for login credentials
    }else if(badgenumb > 999 || badgenumb < 1){
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number Login Credentials, Please Resubmit";
        //This give the Badge Number the authorized quantity of number to validate login credentials
    }else{
        console.log("Submission Passes!");
        //This will let the page know if their login credential is Invalid or if their login credential submission passes
        alert("Credential Validation Authorized! Welcome, " + fullName);
        location.replace("UATSpaceProgramPage.html");
        //This will allow you to the UAT Space Program Page when the credentials are validated
    }


}