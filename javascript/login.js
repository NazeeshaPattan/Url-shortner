const form = document.getElementById("loginform")
function validate(){
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    if(!password||!email){
        alert("please enter all the fields")
    }
    else{
        console.log(password,email)
    }
}
 