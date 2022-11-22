let signup=JSON.parse(localStorage.getItem("signup"));

document.getElementById("circlrArrow").addEventListener("click", function(){
    let SignInNumber=document.getElementById("P_number_input").value;

    let alreadySignedUp=false;

    for(let i=0; signup && i<signup.length; i++){
            if(signup[i].UserNumber==SignInNumber){
                alreadySignedUp=true;
            }
        }

    let data={
        number:SignInNumber,
    }
   

    if(SignInNumber){
       if(alreadySignedUp){
       localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("login",JSON.stringify(data));
        document.getElementById("popup").style.display="block";
        document.getElementById("P_form").style.display="none";
        document.getElementById("login_successful").play();
        window.location.href = "../../index.html"



        setTimeout(()=>{
        document.getElementById("popup").style.display="none";
        document.getElementById("P_form").style.display="block";
        },3000)
        
       }else{
        alert("Please Signup first!");
        localStorage.setItem("login",JSON.stringify(data));
        localStorage.setItem("isLoggedIn", "false");
        window.location.replace("../P_Signup/P_index.html");
       }
       
    }
})



////////////////// NAV MENU///////////////////////////


//     document.getElementById("Alogodiv").addEventListener("click",()=>{
//     document.getElementById("Amenu").style.marginLeft="0px";
//     document.getElementById("Amenu").style.transition="0.5s all ease-in-out";
   
//     document.getElementById("Amenu").style.opacity="1";
//     document.getElementById("Amenu").style.opacity="1";
//     document.getElementById("blur-div").style.marginLeft="0px";
//     document.getElementById("blur-div").style.transition="0.9s all ease-in-out";
//     document.querySelector("body").style.overflow="hidden";
    
//   })
//   document.getElementById("Across").addEventListener("click",()=>{
//     document.getElementById("Amenu").style.marginLeft="-1000px";
//     document.getElementById("Amenu").style.transition="1s all ease-in-out";
//     document.getElementById("Amenu").style.opacity="0";
//     document.getElementById("blur-div").style.marginLeft="-2000px";
//     document.getElementById("blur-div").style.transition="0.5s all ease-in-out";
//     document.querySelector("body").style.overflow="scroll";
 
//   })