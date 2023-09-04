const button = document.getElementById("btn");


async function mapNavigator(){
    try{

        document.location = "map.html";
    }
    catch(error){
        console.log(error);
    }
    
}

// adding event listner to the buttin fetchweather
button.addEventListener("click",()=>{
    mapNavigator();
})






