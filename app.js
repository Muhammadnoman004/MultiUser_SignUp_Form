var allUsers = []
var UserData = localStorage.getItem('Users')

if(UserData !== null){
    allUsers = JSON.parse(UserData)
}

function signUp(){
    var sinEmail = document.getElementById('semail').value;
    var sinPassword = document.getElementById('spass').value;
    
    if(sinEmail == '' && sinPassword == ''){
        document.getElementById('para').innerHTML = 'Please Fill The Form'
    }
    else if(sinEmail == ''){
        document.getElementById('para').innerHTML = 'Please Enter The Email'
    }
    else if(sinPassword == ''){
        document.getElementById('para').innerHTML = 'Please Enter The Password'
    }
    else{
        var users = {
    
            Email : sinEmail,
            Password : sinPassword
        }
        
        allUsers.push(users)
       
        localStorage.setItem('Users', JSON.stringify(allUsers))
        location.href = './signIn.html'
    }

}




function logIn(){
   var logemail = document.getElementById('lemail').value
   var logpassword = document.getElementById('lpass').value

   var filterUser = allUsers.filter(function(data){
       return data.Email === logemail && data.Password === logpassword
   })
     if(logemail == '' && logpassword == ''){
       document.getElementById('para').innerHTML = 'Please Fill The Form'
   }
   else if(logemail == ''){
    document.getElementById('para').innerHTML = 'Please Enter The Email'
    }
    else if(logpassword == ''){
    document.getElementById('para').innerHTML = 'Please Enter The Password'
    }
   else if(filterUser.length){
       location.href = './Welcome.html'
   }
  
     else{
    alert('Your Email / Password Is Wrong So Please Sign Up Again')
    location.href = './signUp.html'
   }

   
}

function SIchange(){
    location.href = './signIn.html'
}
function SUchange(){
    location.href = './signUp.html'
}
function logOut(){
    location.href = './signUp.html'
}

