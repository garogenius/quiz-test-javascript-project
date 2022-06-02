// function signUp(){
//     let name=document.getElementById('name');
//     let email=document.getElementById('email').value;
//     let password=document.getElementById('password').value;
//    
    function validateForm() {
        let x = document.getElementById('name').value;
        let email=document.getElementById('email').value;
        let password=document.getElementById('password').value;
        let action=document.getElementById('action');
        if (x == "") {
        document.getElementById('name-text').innerHTML="name required";
          return false;
        }
       else if (email=="") {
            document.getElementById('email-text').innerHTML="email required";
            return false
        }
       else if (password=="") {
            document.getElementById('password-text').innerHTML="password required";
            return false
           
      }else{
          document.write('hey '+x+' your registration is suscessfully!');
      }
    }
   function logInForm(){
    //    alert('hello');
   let a=document.getElementById('log-name-text').value;
   let b=document.getElementById('log-password-text').value;
   let c=document.getElementById('log-name').value;
   let d=document.getElementById('log-password').value;

    var username='suleiman';
    var pass=1234;
    if (c!=username) {
        document.getElementById('log-name-text').innerHTML="username is incorrect?";
    }else if(d!=pass){
        document.getElementById('log-password-text').innerHTML="password is incorrect?";
        d.style.bordercolor="red";
    }else{
        document.write('hey, welcome back mr ' +username);
    } 
   }
   let p1=document.getElementById('p1');
   let p2=document.getElementById('p2');
   p1.addEventListener('click',function(){
    //    p1.style.animate.height="toggle", opacity=" toggle";
       sign.style.display="none";
       if(sign.style.display=="none"){
       login.style.display='block'
   }else{
       sign.style.display='none'
   }
   p2.addEventListener('click',function(){
    login.style.display="none";
    if(login.style.display=="none"){
        sign.style.display='block'
    }else{
        login.style.display='none'
    }

   })
})
