const regex =/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

/// *** 
localStorage.setItem('user1@gmail.com','pass1');
localStorage.setItem('user2@outlook.fr','pass2');
localStorage.setItem('user3@gmail.com','pass3');
localStorage.setItem('user4@gmail.com','pass4');

/// ***
const Errmsg ="Erreur au niveau d'email"
const Errmsg1 = "Compte n'existe pas";
const PassErrMsg = "Password Incorrect";
const Vmsg = "Email valide"; 
const AuthV= "Authentification Valide"



$(document).ready(()=>{

    let test = 0;
    $('input#myEmail').keyup((e)=>{

        const email = e.target.value;
        let EmailVerif = $('#myEmailVerif');
        if(email){
            
            if(regex.test(email)){
                
                EmailVerif.css("color","green")
                EmailVerif.text(Vmsg);
                test = 1;

            }else{
                ///erreur au niveau syntax email
                EmailVerif.css("color","red")
                EmailVerif.text(Errmsg); 
            
            }
    
        }
        $("#myButton").click(()=>{
            const email=$("input#myEmail").val();
            const password =$('#myPassword').val();
            let PassVerif = $('#myPassVerif');
            let EmailVerif = $('#myEmailVerif');
            
            if(test){            
                
                if(localStorage.getItem(email) == password)
                {
                    PassVerif.css("color","green")
                    PassVerif.text(AuthV);
                }else{
                    PassVerif.css("color","red")
                    PassVerif.text(Errmsg1);
                }
                EmailVerif.text("");}
            })
    });
    

})