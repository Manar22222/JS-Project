// registration
const submit_button = document.querySelector(".button");
submit_button.onclick = (e)=>{
    e.preventDefault();

    // all input data recived this variables
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const password = document.getElementById("password").value;
    const rPassword = document.getElementById("rPassword").value;

    // store this data in web browser
    localStorage.setItem('Name',name);
    localStorage.setItem('Email',email);
    localStorage.setItem('MobileNumber',mobileNumber);
    localStorage.setItem('Password',password);
    localStorage.setItem('RPassword',rPassword);

    if(name=="" || email=="" || mobileNumber=="" || password=="" || rPassword==""){
        // swal("Opps..!", "Input field has no value", "error");
        alert("Input field has no value")
    }else{
        if(password !== rPassword ){
            // swal("Opps..!", "Password not matching", "error");
            alert("Password not matching")
        }else{
            // swal("Good job!", "Registration successful", "success");
            alert("Registration successful")
        }
    }
}


// signin
const login = document.querySelector('.login');
login.onclick =(e) => {
    e.preventDefault();
    // cautch the value which is type user login page
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // get value in localStorage which store 
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if (email == "" || password == "") {
        alert("Input field has no value");
    } else {
        if (email == Email && password == Password) {
            alert("Sign in successful");
        } else {
            alert("Something is wrong");
        }
    }
}


// ---------------------------------------------------------------
let Product = document.getElementById('Product');
let Price = document.getElementById('Price');
let Category = document.getElementById('Category');
let Count = document.getElementById('Count');
let submit = document.getElementById('submit');

console.log(Product,Price,Category,Count,submit); 


// let dataPro = [];


// submit.onclick = function(){
//     let newPro = {
//         title:title.value,
//         price:price.value,
//         category:category.value,
//         count:count.value,
//     }
//     console.log(newPro);
// }