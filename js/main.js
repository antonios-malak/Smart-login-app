var passwordInput = document.getElementById("password")

function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var usersArr = [{}];

    if (localStorage.getItem("users") != null){
    usersArr=JSON.parse(localStorage.getItem("users"))}

    for (var i =0 ; i< usersArr.length ; i++)
    if(usersArr[i].email  == email  && usersArr[i].password == password){        
        window.location.href = `home.html`           
        }
    else if(usersArr[i].email== email  && usersArr[i].password !== password){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text:"Incorrect password ",
          });  
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text:"Your account isn't exist , You need to Signup .",
          });
    };
};
check.addEventListener("change", function(){
    if(this.checked){
         passwordInput.type = `text`;
         checkLabel.innerHTML= "Hide password";
    }else{
         passwordInput.type = `password`
         checkLabel.innerHTML= "show password"
    }
});
