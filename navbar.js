

document.getElementById("Alogodiv").addEventListener("click",()=>{
    document.getElementById("Amenu").style.display="block";
    
  })
  document.getElementById("Across").addEventListener("click",()=>{
    document.getElementById("Amenu").style.display="none";
    
  })

  let searchProduct=async (event)=>{
    if(event.key=="Enter"){
       let query=document.getElementById("Asearch").value;
       let res= await fetch(`https://secure-waters-87632.herokuapp.com/api/${query}`);
       let data=await res.json();
       
       appendData(data);
       document.getElementById("Asearchbar").innerHTML="X";
       document.getElementById("Asearchbar").addEventListener("click",()=>{
        document.getElementById("Asearchdiv").style.visibility="hidden";
        document.getElementById("Asearch").value="";
        let img=document.createElement("img");
        img.id="Asearchlogo"
        img.src="data:image/png;base64,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"
        document.getElementById("Asearchbar").innerText=null;
        document.getElementById("Asearchbar").append(img);
       })
    }
  }
  document.getElementById('Asearch').addEventListener("keypress",searchProduct);

  let appendData=(data)=>{
    document.getElementById("Asearchdiv").innerHTML=null;

   document.getElementById("Asearchdiv").append(close);
    data.forEach(({title,pricenew,image,priceold}) => {
        let div1=document.createElement("div");
       
        let h3=document.createElement("h3");
        h3.innerText=title
        let p=document.createElement("p");
        p.innerText=`Price:- ${pricenew}`;
        p.style.marginTop="30px"
        div1.append(h3,p)
        let img=document.createElement('img');
        img.src=image;
        let div=document.createElement('div');
        div.classList.add("AappendName")
        div.append(div1,img);
        div.addEventListener("click",()=>{
          localStorage.setItem("product",JSON.stringify({title,pricenew,image,priceold}))
        })
        document.getElementById("Asearchdiv").append(div)
    });
    document.getElementById("Asearchdiv").style.visibility="visible";
    document.getElementById("Asearchdiv").style.display="block";
  }

  document.getElementById('Asearchbar').addEventListener("click",searchProduct);