const button = document.getElementById("btn");


function mapNavigator(){
    window.location.href = "http://127.0.0.1:5500/map.html",true;
}

// adding event listner to the buttin fetchweather
button.addEventListener("click",()=>{
    mapNavigator();
})






