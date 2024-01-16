function arth(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email== "nuraldinkamberi@gmail.com" && password=="nurbaba123"){
        window.location.assign("../Project.html");
        alert("Login Successfully");
    }
    else{
        alert("Invalid Information");
        return;
    }
}