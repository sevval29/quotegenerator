document.querySelector("#btn").addEventListener("click",getApi);

function getApi(){
    fetch("https://api.kanye.rest/")
    .then((response)=>response.json())
    .then((json)=>{
         elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = json.quote;  
    })
    
   
    .catch((err)=>console.log(err));
}

 


      
    


