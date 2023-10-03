'use client'
import React from 'react'
import {useState , useEffect} from 'react';
const WeatherPratice = () => {


    
        const [weatherData,setWeatherData]=useState({
            "wind_speed": '',
            "wind_degrees": 0,
            "temp": 0,
            "humidity": 0,
            "sunset": 0,
            "min_temp": 0,
            "cloud_pct": 0,
            "feels_like": 0,
            "sunrise": 0,
            "max_temp": 0
          })
    
    

const [cityName,setcityName]=useState ('karachi');
    
useEffect(() => {
    const apiUrl = `https://api.api-ninjas.com/v1/weather?city=${cityName}`;
       
        fetch(apiUrl, {
            method: 'GET',
            headers: { 'X-Api-Key': '2TxDOe8rYvMgWif0ch0k3i4qRJof3R5PdEZOHNE8' },
        })
            .then(response => response.json())
            .then(data => { setWeatherData(data);  })
            .catch(error => error);
}, []);




    return (
    <>
    
    <div className="mx-auto p-4 bg-purple-400 h-screen flex justify-center">
    <div className="flex flex-wrap">
        <div className="w-full   px-2">
            <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full  dark:bg-gray-600">
                <div className="px-6 py-6 relative">
                    <div className="flex mb-4 justify-between items-center">
                        <div>
                            <h5 className="mb-0 font-medium text-xl">{cityName}</h5>
                            <h6 className="mb-0">April 04 2021</h6><small>Cloudy</small>
                        </div>
                        <div className="text-right">
                            <h3 className="font-bold text-4xl mb-0"><span>  {weatherData.temp} &deg;</span></h3>
                        </div>
                    </div>
                    <div className="block sm:flex justify-between items-center flex-wrap">
                        <div className="w-full sm:w-1/2">
                            <div className="flex mb-2 justify-between items-center"><span>Temp</span><small className="px-2 inline-block"> {weatherData.temp} &nbsp;&deg;</small></div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="flex mb-2 justify-between items-center"><span>Feels like</span><small className="px-2 inline-block"> {weatherData.feels_like} &nbsp;&deg;</small></div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="flex mb-2 justify-between items-center"><span>Temp min</span><small className="px-2 inline-block"> {weatherData.min_temp} &nbsp;&deg;</small></div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="flex mb-2 justify-between items-center"><span>Temp max</span><small className="px-2 inline-block">  {weatherData.max_temp} &nbsp;&deg;</small></div>
                        </div>
                    </div>
                </div>
                <div className="divider table mx-2 text-center bg-transparent whitespace-nowrap"><span className="inline-block px-3"><small>Forecast</small></span></div>
                <div className="px-6 py-6 relative">
                    <div className="text-center justify-between items-center flex" style={{flexFlow: "initial"}}>
                        <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">humidity </span><img src="https://i.imgur.com/ffgW9JQ.png" className="block w-8 h-8" /><span className="block my-1">{weatherData.humidity} &deg;</span></div>
                        <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">wind speed</span><img src="https://i.imgur.com/BQbzoKt.png" className="block w-8 h-8" /><span className="block my-1">{weatherData.wind_speed}&deg;</span></div>
                        <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">wind degree</span><img src="https://i.imgur.com/BQbzoKt.png" className="block w-8 h-8" /><span className="block my-1">{weatherData.wind_degrees}&deg;</span></div>
                        <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">sun rise</span><img src="https://i.imgur.com/ffgW9JQ.png" className="block w-8 h-8" /><span className="block my-1">{weatherData.sunrise}&deg;</span></div>
                        <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">sun set</span><img src="https://i.imgur.com/ffgW9JQ.png" className="block w-8 h-8" /><span className="block my-1">{weatherData.sunset}&deg;</span></div>
                        {/* <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Mon</span><img src="https://i.imgur.com/BQbzoKt.png" className="block w-8 h-8" /><span className="block my-1">38&deg;</span></div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    
    </>
  )
}

export default WeatherPratice;