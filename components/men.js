  
let ProductData = JSON.parse(localStorage.getItem('DATA'))





document.getElementById("Alogodiv").addEventListener("click",()=>{
    document.getElementById("Amenu").style.marginLeft="0px";
    document.getElementById("Amenu").style.transition="0.5s all ease-in-out";
   
    document.getElementById("Amenu").style.opacity="1";
    document.getElementById("Amenu").style.opacity="1";
    document.getElementById("blur-div").style.marginLeft="0px";
    document.getElementById("blur-div").style.transition="0.9s all ease-in-out";
    document.querySelector("body").style.overflow="hidden";
    
  })
  document.getElementById("Across").addEventListener("click",()=>{
    document.getElementById("Amenu").style.marginLeft="-1000px";
    document.getElementById("Amenu").style.transition="1s all ease-in-out";
    document.getElementById("Amenu").style.opacity="0";
    document.getElementById("blur-div").style.marginLeft="-2000px";
    document.getElementById("blur-div").style.transition="0.5s all ease-in-out";
    document.querySelector("body").style.overflow="scroll";
 
  })

  let searchProduct=async (event)=>{
    if(event.key=="Enter"){
       let query=document.getElementById("Asearch").value;
       let res= await fetch(`https://secure-waters-87632.herokuapp.com/api/${query}`);
       let data2=await res.json();
       console.log(data2);

       localStorage.setItem('DATA',JSON.stringify(data2))
       window.location.href = "./search.html"
    //    document.getElementById("Asearchbar").innerHTML="X";
    //    document.getElementById("Asearchbar").addEventListener("click",()=>{
    //     document.getElementById("Asearchdiv").style.visibility="hidden";
    //     document.getElementById("Asearch").value="";
    //     let img=document.createElement("img");
    //     img.id="Asearchlogo"
       
    //     document.getElementById("Asearchbar").innerText=null;
    //     document.getElementById("Asearchbar").append(img);
        
    //    })
    // appendData(data);
    }
   
  }
  document.getElementById('Asearch').addEventListener("keypress",searchProduct);
//   document.getElementById("Asearchdiv").innerHTML=null;
  
  document.getElementById('Asearchbar').addEventListener("click",searchProduct);



  // cartItemCount()
function cartItemCount(){
    
    let cartPlace = document.querySelector('#Aitemcount');
    let cartItem = JSON.parse(localStorage.getItem('products'));
    cartPlace.innerHTML = null
    cartPlace.innerHTML = cartItem.length
    
}
 
let listLogo = document.querySelector("#Asearchlogo");

listLogo.addEventListener('click',() => {
    document.getElementById("Asearchdiv").style.visibility="hidden";
})
document.getElementById("Aaccount").addEventListener("click",()=>{
  console.log("hii")
  window.location.href="./profile.html"
})
