function validation(){
    var EmailRow = document.getElementById("EmailRow");
    var Email = document.getElementById("Email").value;

    var Text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(Email.match(pattern)){
        EmailRow.classList.add("valid")
        EmailRow.classList.remove("invalid")
        Text.innerHTML = "Your Email is Valid";
        Text.style.color = "#00ff00";


    }else{
        EmailRow.classList.remove("valid")
        EmailRow.classList.add("invalid")
        Text.innerHTML = "Please Enter Valid Email"
        Text.style.color = "#ff0000";
    }
    if(Email == ""){
        EmailRow.classList.remove("valid")
        EmailRow.classList.remove("invalid")       
        Text.innerHTML = "";        
    }
};




function checkStrength(){
    let password = document.getElementById("Password").value;
    let spanStrength = document.getElementById("strength")
     
    let letters = /([a-z].*[A-Z])|([A-Z].*[a-z])/;
    let numbers = /([0-9])/;
    let caracters = /([!,%,&,@,#,$,^,*,_,~])/;

    let strength = 1;

    if(password.match(letters)){
        strength += 1;
    }
    if(password.match(numbers)){
        strength += 1;
    }
    if(password.match(caracters)){
        strength += 1;
    }
    if(password.length > 7){
        strength += 1;
    }


    if(strength == 1){
      spanStrength.innerHTML = "You need to pick a more secure password!";
      spanStrength.style.color = "#F50A0A";
       
    }
    else if(strength == 2){
        spanStrength.innerHTML = "Your password is insecure!";
        spanStrength.style.color = "#F1390C";

       
    }
    else if(strength == 3){
        spanStrength.innerHTML = "Your password is medium secure!";
        spanStrength.style.color = "#F1770C";
    }
    else if(strength >= 4){
        spanStrength.innerHTML = "Your password is secure!";
        spanStrength.style.color = "#2AB409";
    }
    console.log(strength)

    if(password == ""){
        spanStrength.innerHTML = "";
    }
}


console.log("loading..");