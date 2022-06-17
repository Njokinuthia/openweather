import React, { useState, useEffect } from "react"
import Search from "./Search"

function Display({ weather , handleCity }) {
  console.log(`the weather is ${weather.main.temp}`)

  const current = weather.weather
  const main = weather.main
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const yearMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

  const [day, setDay] = useState()
  const [date, setDate] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [hour, setHour] = useState()
  const [minute, setMinute] = useState()
  const [amPm, setAmPm] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      let today = new Date();
      let day = today.getDay();
      let date = today.getDate();
      let month = today.getMonth() + 1;
      let year = today.getFullYear();
      let hour = today.getHours();
      let minute = today.getMinutes();
      let hourIn12Hour = hour <= 13 ? hour % 13 : hour
      let amPm = hour >= 12 ? "Pm" : "Am"
   

      setDay(day)
      setDate(date)
      setMonth(month)
      setYear(year)
      setHour(hourIn12Hour)
      setMinute(minute)
      setAmPm(amPm)
    }, 1000);

    return () => clearInterval(interval);

  }, [minute])



  return (
    <div className="container border">      
      <div className="row">
        <div className="col-sm-8">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <h1 >{(main.temp - 273.25).toFixed(0)}°C</h1>
              </div>
              <div className="col-sm-6">
                <h3>{weather.name}</h3>
                <p>{hour}:{minute} <span>{amPm}</span></p>
                <p>{weekDays[day]}, {date} {yearMonths[month]} {year}</p>
              </div>
              <div className="col-sm-2">
                <img src={`http://openweathermap.org/img/wn/${current[0].icon}@2x.png`} alt="icon" />
                <h3>{current[0].main}</h3>
              </div>             
            </div>
          </div>    
          
          
        </div>
        <div className="col-sm-4 border">
          <Search handleSearch={handleCity} />   
          <h2>Weather Details</h2>          
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