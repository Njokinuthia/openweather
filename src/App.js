
// import './App.css';

import React, { useState, useEffect } from "react";
import Search from "./Components/Search"
import Display from "./Components/Display"



function App() {
  // const [data , setData] = useState({})
  const [city,setCity] = useState("Nairobi")
 
  const apiKey = 
    "28d519b791ec96557c38884a192d1bc7";
  
  const data = {
    "coord": {
      "lon": -121.9358,
        "lat": 37.7021
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
      "base": "stations",
        "main": {
      "temp": 289.35,
        "feels_like": 288.83,
          "temp_min": 284.83,
            "temp_max": 293.59,
              "pressure": 1010,
                "humidity": 69
    },
    "visibility": 10000,
      "wind": {
      "speed": 4.63,
        "deg": 240
    },
    "clouds": {
      "all": 0
    },
    "dt": 1655393554,
      "sys": {
      "type": 2,
        "id": 2016191,
          "country": "US",
            "sunrise": 1655383539,
              "sunset": 1655436683
    },
    "timezone": -25200,
      "id": 5344157,
        "name": "Dublin",
          "cod": 200
}
  // const city = "nairobi"
  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  //     .then(resp=>resp.json())
  //     .then(data=>console.log(data))
  // },[])
  console.log(data.main)

  function handleCity(cityInput) {
    setCity(cityInput)
    console.log(`my city is ${city}`)
  }

  return (
    <div className="App">
      {/* <Search handleSearch={handleCity} />         */}
      <Display handleSearch={handleCity} weather = {data}/>
    </div>
  );
}

export default App;
