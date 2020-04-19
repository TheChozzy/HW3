// Assignment Code

//Variables//

var uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercasecharacters ="abcdefghijklmnopqrstuvwxyz";
var specialcharacters = "!@#$%^&*()";
var generateBtn = document.querySelector("#generate");
//var enteredPassword = document.querySelector("#password");


//Functions//






// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  var loopcontrol = true;

  //Number of Characters

  while(loopcontrol == true){
    var userlength = prompt("Please enter a numeric value indicating how many characters should make up the password. Passwords may only consist of 8 to 128 characters.").trim();
  if(typeof userlength ==!'number' || (userlength<8 || userlength > 128)){
    alert("Please enter a numeric value between 8 and 128.");
  }
  else{
    var validlength = userlength;
    loopcontrol = false;
  }
  }

// Character Types within the Password 
 var lowercase = confirm("Please indicate if the password should have lowercase characters.");
 var uppercase  = confirm("Please indicate if the password should have uppercase characters.");
 var numeric = confirm("Please indicate if the password should have numeric characters.");
 var specialcharacter =  confirm("Please indicate if the password should have special characters.");
 var validpassword = '';

var charinsertcount = 0 ;

while(charinsertcount < validlength){
    if(uppercase === true){
      generateduppercase = uppercasecharacters.charAt(Math.floor((Math.random()*validlength)+1));
      validpassword += generateduppercase;
      charinsertcount++;
      console.log(charinsertcount);
      console.log(generateduppercase);
      console.log(validpassword)
    }
    //console.log(generateduppercase);
    if(lowercase === true){
      generatedlowercase = lowercasecharacters.charAt(Math.floor((Math.random()*validlength)+1));
      validpassword += generatedlowercase;
      charinsertcount++;
      console.log(charinsertcount);
      console.log(generatedlowercase);
      console.log(validpassword)

    }
    //console.log(generatedlowercase);
    if(numeric === true){
      generatednumeric = String(Math.floor((Math.random() * 9) + 1));
      validpassword += generatednumeric;
      charinsertcount++;
      console.log(charinsertcount);
      console.log(generatednumeric);
      console.log(validpassword);
    }
    if(specialcharacter === true){
      generatedspecial = String(specialcharacters.charAt(Math.floor((Math.random()*validlength)+1)));
      validpassword += generatednumeric;
      charinsertcount++;
      console.log(charinsertcount);
      console.log(generatedspecial);
      console.log(validpassword);
    }
    //console.log(generatedspecial);
    console.log(validpassword);
    console.log(charinsertcount);
}


 alert("Your new password is:"+ validpassword);


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
