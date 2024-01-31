const passwordBox=document.getElementById("password");
const length=15;  //length of password 

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#$%^&*()_+~!{}[]<>/-=";

const allChars=upperCase+lowerCase+number+symbols;

function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password+=symbol[Math.floor(Math.random()*symbol.length)];
    }
    passwordBox.value=password;
}
