var passwordInput = document.getElementById("password")
var emailInput = document.getElementById("email")
var checkLabel = document.getElementById("checkLabel")
var check = document.getElementById("check")
var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,6}$/g;
var passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g ;



function signUp(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,6}$/g;
    var passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g ;
    var usersArr = [];


    if(localStorage.getItem("users") != null){
        usersArr= JSON.parse(localStorage.getItem("users")) }

    if (password == ""  || email == "" || name == ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "all fields are required",
          })
          return;
    }
    
    if(!emailRegex.test(email) || !passRegex.test(password)){
        Swal.fire({
            icon: "error",
            title: "invalid email or incorrect password",
            text: "pleaser enter a valid email and password `password Minimum eight characters, at least one letter, one number and one special character`",
          })
          return;
    }else{

    };
    
    for(var i=0 ; i<usersArr.length ; i++){
    if(usersArr[i].email == email ){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "email is already exist , please login",
          }) 
        return;
        }
    }

    usersArr.push({ name: name, email: email, password: password });
    localStorage.setItem("users" , JSON.stringify(usersArr));
    Swal.fire({
        title: "Signup successfully completed",
        text: "Good Job !",
        icon: "success"
    });
}
check.addEventListener("change", function(){
    if(this.checked){
         passwordInput.type = `text`;
         checkLabel.innerHTML= "Hide password";
    }else{
         passwordInput.type = `password`
         checkLabel.innerHTML= "show password"
    }
});
emailInput.addEventListener("input" , function(){
    if(emailRegex.test(this.value)){
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")

    }else{
        emailInput.classList.remove("is-valid")
        emailInput.classList.add("is-invalid")
    }
})    
passwordInput.addEventListener("input" , function(){
    if(passRegex.test(this.value)){
        passwordInput.classList.add("is-valid")
        passwordInput.classList.remove("is-invalid")        
    }else{
        passwordInput.classList.remove("is-valid")
        passwordInput.classList.add("is-invalid")
    }
})    


    


