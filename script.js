const button = document.getElementById("btn");


async function mapNavigator(){
    try{

        window.location.href = "http://127.0.0.1:5500/map.html";
    }
    catch(error){
        console.log(error);
    }
    
}

// adding event listner to the buttin fetchweather
button.addEventListener("click",()=>{
    mapNavigator();
})






