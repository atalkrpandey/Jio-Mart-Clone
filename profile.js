let detail=JSON.parse(localStorage.getItem("userdetail"));
if(detail!==null){                               
document.getElementById("Ausername").innerText=detail.username;
document.getElementById("Ausername1").innerText=detail.username;
document.getElementById("Auseremail").innerText=detail.Email;
document.getElementById("Amob1").innerText=detail.Mobile;
document.getElementById("Amob2").innerText=detail.Mobile;
document.getElementById("Aemail2").innerText=detail.Email;
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
        username:firstname+" "+lastname,
        age:age,
        dob:dob,
        Email:Email,
        Mobile:num,
    }
    localStorage.setItem("userdetail",JSON.stringify(detail1));
    let detail=JSON.parse(localStorage.getItem("userdetail"));
    document.getElementById("Ausername").innerText=detail.username;
document.getElementById("Ausername1").innerText=detail.username;
document.getElementById("Auseremail").innerText=detail.Email;
document.getElementById("Amob1").innerText=detail.Mobile;
document.getElementById("Amob2").innerText=detail.Mobile;
document.getElementById("Aemail2").innerText=detail.Email;
alert("Your Profile updated")
document.getElementById("Adropdown").style.display="none";
  })