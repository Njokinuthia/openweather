import React from "react"

function Display({ weather }) {
  console.log(`the weather is ${weather.main.temp}`)

  const current = weather.weather
  const main = weather.main
  return (
    <div className="container border">
      <div className="row">
        <div className="col-sm-6">
          <h3>Temp:{(main.temp - 273.25).toFixed(2)}°C</h3>
          <div>
            <h1>city</h1>
            <h3>date</h3>
          </div>
          <div>
            <img src={`http://openweathermap.org/img/wn/${current[0].icon}@2x.png`} alt="icon" />
            <h3>{current[0].main}</h3>
          </div>
        </div>
        <div className="col-sm-6">
          <h2>Weather Details</h2>
          {/* <p>City:{main.name}</p> */}
          <p>Condition:{current[0].description} </p>
          <p>Temperature:{(main.temp - 273.25).toFixed(2)} °C</p>
          <p>Humidity:{main.humidity}% </p>
          <p>Pressure:{main.pressure} hPa</p>
        </div>
      </div>

    </div>
  )
}

export default Display;