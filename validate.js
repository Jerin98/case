function validate(){
    let username = document.getElementById("username");
    let Password = document.getElementById("Password");
    let pswerror = document.getElementById("pswerror");
    let error = document.getElementById("error");
    function caller(username,Password,callback){
        if(username.value=="admin"){
            error.innerText=" ";
            pswerror.innerText=" ";
            if(Password.value=="12345"){
                pswerror.innerText=" ";
                callback(username,Password)
                document.location.href = "todo.html";
                return false;
            }else if(Password.value==""){
                pswerror.innerText="Cannot be empty!!! ";
                return false;

            }
            else{
                pswerror.innerText="Password is wrong";
                return false;
            }
    
        }else if(username.value==""){
            error.innerText="Cannot be empty!!!";
            return false;
           
        }
        else{
            
            error.innerText="Username wrong";
            return false;
            
        }
        
    }
    caller(username,Password,function(error){
        console.log(error);
    })
}