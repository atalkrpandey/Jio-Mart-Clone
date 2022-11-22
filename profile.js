let detail=JSON.parse(localStorage.getItem("signup")) [0];

if(detail !==null){                               
    document.getElementById("Ausername").innerText=detail.firstname+" "+detail.lastname;
document.getElementById("Ausername1").innerText=detail.firstname+" "+detail.lastname;
document.getElementById("Auseremail").innerText=detail.email;
document.getElementById("Amob1").innerText=detail.UserNumber;
document.getElementById("Amob2").innerText=detail.UserNumber;
document.getElementById("Aemail2").innerText=detail.email;
}else{
    window.location.href="login.html";
}
document.getElementById("Alogout").addEventListener("click",()=>{
   
    localStorage.setItem("userdetail",null);
    window.location.href="index.html";
})
document.getElementById("Aedit").addEventListener("click",()=>{
   
document.getElementById("Adropdown").style.display="block";


})
document.getElementById("Aclose").addEventListener("click",()=>{
   
   document.getElementById("Adropdown").style.display="none";
   

  })
  document.getElementById("Asave").addEventListener("click",()=>{
    let firstname=document.getElementById("fname").value;
    let lastname=document.getElementById("lastname").value;
    let age=document.getElementById("Aselect").value;
    let dob=document.getElementById("Adob").value;
    let Email=document.getElementById('Email').value;
    let num=document.getElementById("mbl").value;
    let detail1={
       firstname:firstname,
       lastname:lastname,
        age:age,
        dob:dob,
        email:Email,
        UserNumber:num,
    }
    localStorage.setItem("signup",JSON.stringify(detail1));
    let detail=JSON.parse(localStorage.getItem("signup"));
    document.getElementById("Ausername").innerText=detail.firstname+" "+detail.lastname;
document.getElementById("Ausername1").innerText=detail.firstname+" "+detail.lastname;
document.getElementById("Auseremail").innerText=detail.email;
document.getElementById("Amob1").innerText=detail.UserNumber;
document.getElementById("Amob2").innerText=detail.UserNumber;
document.getElementById("Aemail2").innerText=detail.email;
alert("Your Profile updated")
document.getElementById("Adropdown").style.display="none";
  })