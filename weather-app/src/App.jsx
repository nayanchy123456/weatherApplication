import React from 'react'
import './App.css'

function App() {
  return (
    <div className='wrapper'>

      <div className='header'>
        <h1 className='city'>London</h1>
        <p className='temperature'>60°F</p>
        <p className='condition'>Cloudy</p>
      </div>
      <div className='weather-details'>
        <div>
          <p>Humidity</p>
          <p>60%</p>
        </div>
        <div>
          <p>Wind Speed</p>
          <p>7 mph</p>
        </div>
      </div>
      <div className='forecast'>
        <h2 className='forecaset-header'>5-Day Forecast</h2>
        <div className='forecast-days'>
          <div className='forecast-day'>
            <p>Monday</p>
            <p>Cloudy</p>
            <p>12°F</p>
          </div>
          <div className="forecast-day">
            <p>Monday</p>
            <p>Cloudy</p>
            <p>12°F</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
