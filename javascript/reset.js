const form = document.getElementById("resetform")
function validate(){
    const email=document.getElementById("email").value
    if(!email){
        alert("please enter all  fields")
    }
    else{
        console.log(password,email)
    }
}