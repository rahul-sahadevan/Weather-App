// extracting the div elements
const iframe = document.getElementById("iframe");
const mapOut = document.getElementById("map-out");
const hightInfo = document.getElementById("high-div");

// function to get the geolocation 
const successCallback = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude  = position.coords.longitude;
    hightInfo.innerHTML=`
        <p id="lati">Lat: <span>${latitude}</span></p>
        <p id="longi">Long: <span>${longitude}</span></p>
    `
    let link = `https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed`
    iframe.src = link;
    mapOut.append(iframe);
    iframe.style.width = "90%"
    getData(latitude,longitude);

    
  };
//   error handling 
  const errorCallback = (error) => {
    alert(error);
  };

// function to find  wind direction
  function getDiretion(degree){
    if(degree > 360){
        degree -= 360;
        if(degree > 0 && degree< 90){
            return "North East"
        }
        if(degree > 90 && degree < 180){
            return "South East";
        }
        if(degree > 180 && degree < 270){
            return "South West";
        }
        if(degree > 270 && degree < 360){
            return "North West";
        }
        if(degree == 0 || degree == 360){
            return "North";
        }
        if(degree == 90){
            return "East";
        }
        if(degree == 180){
            return "South";
        }
        if(degree == 270){
            return "West";
        }

    }
    else{
        if(degree > 0 && degree< 90){
            return "North East"
        }
        if(degree > 90 && degree < 180){
            return "South East";
        }
        if(degree > 180 && degree < 270){
            return "South West";
        }
        if(degree > 270 && degree < 360){
            return "North West";
        }
        if(degree == 0 || degree == 360){
            return "North";
        }
        if(degree == 90){
            return "East";
        }
        if(degree == 180){
            return "South";
        }
        if(degree == 270){
            return "West";
        }

    }
  }
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


  
  const IndividualData = document.querySelector(".individual-data");
// using async function to fetch the weather information using openweatherAPI 2.5
  async function getData(latitude,longitude){
    const endpoint =   `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=85d6588eaee5a0d134b1e5e179482061`;
    // const endpoint =`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=85d6588eaee5a0d134b1e5e179482061`
    try{
        const response = await fetch(endpoint);
        const result = await response.json();
        console.log(result)
        IndividualData.innerHTML = `
        <p id="location">Location: <span>${result.name}</span></p>
            <p id="w-speed">Wind Speed: <span>${Math.ceil(result.wind.speed)*(18/5)} kmph</span></p>
            <p id="humididty">Humidity: <span>${result.main.humidity}</span></p>
            <p id="time-zone">Time Zone: <span>GMT +5.30</span></p>
            <p id="pressure">Pressure: <span>${Math.ceil(result.main.pressure / 101.325)}atm</span></p>
            <p id="w-direction">Wind Direction: <span>${getDiretion(result.wind.deg)}</span></p>
            <p id="uv">UV Index: <span>500</span></p>
            <p id="temp">Feels Like: <span>${Math.ceil(result.main.feels_like-273)}<sup>o</sup></span></p>
        `
    }
    catch(error){
        const e = document.createElement("h3");
        e.innerText = "OOP'S Something Went Wrong!";
        e.style.color = "red";
        e.style.backgroundColor = "white"
        IndividualData.append(e);
        alert("Can't able to get the desired weather datas check after sometime") 
    }
  }

