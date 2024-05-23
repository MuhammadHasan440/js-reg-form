const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const cnic = document.querySelector("#cnic")
const age = document.querySelector("#age")


let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
let cnicRegex = /^42\d{11}$/;
form.addEventListener('submit' , (event)=>{
    event.preventDefault()
    if(emailRegex.test(email.value)){
        console.log(email.value)
    }else{
        console.log('your email is not correct');
    }
    if(passwordRegex.test(password.value)){
        console.log(password.value)
    }else{
        console.log('your password is not correct');
    }
    if(cnicRegex.test(cnic.value)){
        console.log(cnic.value)
    }else{
        console.log('your cnic is not correct');
    }
    console.log(age.value);
    // console.log(username.value);
    // console.log(email.value);
    // console.log(password.value);
    // console.log(cnic.value);
    // console.log(age.value);
    // console.log(emailRegex.test(email.value));
    // console.log(passwordRegex.test(password.value));
    // console.log(cnicRegex.test(cnic.value));
})




