
let login=JSON.parse(localStorage.getItem("login"));
document.getElementById("P_usersNumber").innerText=login.number;

let otp;

document.getElementById("eye1").addEventListener("click",showPassword1);
document.getElementById("eye12").addEventListener("click",showPassword1);
document.getElementById("eye2").addEventListener("click",showPassword2);
document.getElementById("eye21").addEventListener("click",showPassword2);


function showPassword1(){

    if(document.getElementById("P_password1").type=="text"){
        document.getElementById("P_password1").type="password";
        document.querySelector("#eye1").style.display="none";
        document.querySelector("#eye12").style.display="inline-block";
      
    }else if(document.getElementById("P_password1").type=="password"){
        document.getElementById("P_password1").type="text";
        document.querySelector("#eye1").style.display="inline-block";
        document.querySelector("#eye12").style.display="none";
    }
    
}
function showPassword2(){

if(document.getElementById("P_password2").type=="text"){
    document.getElementById("P_password2").type="password";
    document.querySelector("#eye2").style.display="none";
    document.querySelector("#eye21").style.display="inline-block";
  
}else if(document.getElementById("P_password2").type=="password"){
    document.getElementById("P_password2").type="text";
    document.querySelector("#eye2").style.display="inline-block";
    document.querySelector("#eye21").style.display="none";
}

}
   
document.getElementById("P_send").addEventListener("click",function(){
    otp=Math.floor((Math.random() * 1000000) + 1);
        // alert(otp);

        // document.querySelector("#loading").style.display="block";
        document.querySelector("body").style.opacity="0.5";
        document.getElementById("otpFetchGif").style.display="block";

        setTimeout(()=>{
           document.getElementById("otpFetchGif").style.display="none";
           document.querySelector("body").style.opacity="1";
        },3000);

        setTimeout(()=>{
            document.querySelector("body").style.opacity="0.5";
            document.querySelector("#loading").style.display="block";
        },3200)

        setTimeout(()=>{
            document.querySelector("#loading").style.display="none";
            document.getElementById("P_OTP").value=otp;
            document.querySelector("body").style.opacity="1";
        },6000);

});


document.getElementById("P_change").addEventListener("click", function(){
    document.getElementById("P_number").innerHTML=`
    <input type="number" id="ChangeNumber" placeholder="Enter another Number"> <button id="updateBtn" onclick="${updateNumber}">Update</button>
    `;

   

});

// document.getElementById("updateBtn").addEventListener("click", updateNumber);
function updateNumber(){
   let newNumber = document.getElementById("ChangeNumber").value;
   document.getElementById("P_Number").innerText=`We have sent 6 digit OTP on +91-${newNumber}`;
}

    let addData = () => {
        let data = {
            firstname: document.getElementById("P_firstName").value,
            lastname: document.getElementById("P_lastName").value,
            email: document.getElementById("P_Email").value,
            password1: document.getElementById("P_password1").value,
            password2: document.getElementById("P_password2").value,
            UserNumber:login.number,
        };


        let pass=true;

        // if(document.getElementById("P_password1").value.match(/[0-9]/) && (document.getElementById("P_password1").value.match(/[a-z]/) || document.getElementById("P_password1").value.match(/[A-Z]/))){
        //     pass=true;
        // }else{
        //     document.getElementById("P_pass").innerText="Please enter a valid password!";
        //     document.getElementById("P_pass").style.color="red";
        // }
        

        if (document.getElementById("P_firstName").value && document.getElementById("P_lastName").value && document.getElementById("P_Email").value && document.getElementById("P_password1").value && document.getElementById("P_password2").value==document.getElementById("P_password1").value && document.getElementById("P_OTP").value && document.getElementById("P_password1").value && pass) {

            let arr = JSON.parse(localStorage.getItem("signup")) || [];
            let existingUser=false;

            if(arr.length){
                for(let i=0; i<arr.length; i++){
                    if(arr[i].email== document.getElementById("P_Email").value || arr[i].updateNumber==login.number){
                      existingUser=true;
                    }
                }
            }

            if(existingUser){
                alert("Already existing user!");
                return ;
            }

            if(document.getElementById("P_OTP").value !=otp){
                alert("Please fill with correct OTP!");
            }else if(document.getElementById("P_password1").value.trim().length !=8){
                alert("Please enter a password as per requirement!");
            }else{
               

                arr.push(data);

                localStorage.setItem("signup", JSON.stringify(arr));
                document.getElementById("signup_sucessful").play();
                document.getElementById("popup").style.display="block";

                setTimeout(()=>{
                    document.getElementById("popup").style.display="none";
                    },3000); 
                
                setTimeout(()=>{
                   window.location.replace("../P_SignIn/P_index.html");
                    },3500);     

console.log(arr);
            }
        }else{
            alert("Please Fill all the required data!");
            
        }


    }
    document.getElementById("P_verifyBtn").addEventListener("click", addData);
