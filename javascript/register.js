const form = document.getElementById("registerform")
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
        console.log(email,password)
        registerUser(email,password)
        
    }
}
async function registerUser(email,password) {
    console.log(email,password)
    let data = {
        email: email,
        password: password
    }
    let datares = await fetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await datares.json()
 alert(res.message)
}