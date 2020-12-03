const form = document.getElementById("newpasswordform")
function validate(){
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    const confirmpassword=document.getElementById("confirmpassword").value
    if(!password||!email){
        alert("please enter all the fields")
    }
    else if(password !== confirmpassword){
        alert("passwords does not match")
    }
    else{
        console.log(password,email)
    }
}