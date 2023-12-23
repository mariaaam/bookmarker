siteNameInput=document.getElementById("siteName");
siteUrlInput=document.getElementById("siteUrl");
alertUrl=document.getElementById("alertUrl");
var websiteList=[];


if(localStorage.getItem("website") !=null){
    websiteList=JSON.parse(localStorage.getItem("website"));
  display();  
 }
 
function submit(){
    if(validationUrl()== true){
         var website={
        nameInput:siteNameInput.value,
        UrlInput:siteUrlInput.value
    }
    // console.log(website);
    
    websiteList.push(website);
    localStorage.setItem("website",JSON.stringify(websiteList));

    console.log(websiteList);
    display();
    clear();
    }
    else{
        alert("write a valid url");
    }
   
}

function clear(){
    siteNameInput.value="";
    siteUrlInput.value="";
}

function display(){
    var container="";
    for(var i=0; i< websiteList.length ; i++){
        container +=`
        <tr>
                    <td>${i+1}</td>
                    <td>${websiteList[i].nameInput}</td>
                    
                    <td>
                        <button class="btn btn-warning text-white"><a href="${websiteList[i].UrlInput}" target="_blank">
                        <i class="fa-solid fa-eye"></i> Visit</a></button>
                    </td>
                    <td>
                        <button class="btn btn-danger" onclick="delet(${i})">
                        <i class="fa-solid fa-trash"></i> Delet</button>
                    </td>
                </tr>
        `;
    }
    document.getElementById("tableSite").innerHTML = container;
}

function delet(parameter){
    websiteList.splice(parameter,1);
    localStorage.setItem("website",JSON.stringify(websiteList));

    display();
}


function validationUrl() {

    var Regex = /^(ftp|http|https):\/\/[^ "]+$/;
     var x=Regex.test(siteUrlInput.value);
     if(!x){
         alertUrl.classList.remove("d-none");  
         siteUrlInput.classList.add("is-invalid");
         siteUrlInput.classList.remove("is-valid");
     }
     else{
        alertUrl.classList.add("d-none"); 
        siteUrlInput.classList.add("is-valid");
        siteUrlInput.classList.remove("is-invalid");
     }
   return x;

   
}
siteUrl.addEventListener("blur",validationUrl)