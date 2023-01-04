
const pointSunny = new Image();
pointSunny.src = 'http://openweathermap.org/img/wn/01d@2x.png';

const pointCloudy = new Image();
pointCloudy.src = 'http://openweathermap.org/img/wn/04d@2x.png';

const pointRain = new Image();
pointRain.src = 'http://openweathermap.org/img/wn/10d@2x.png';

const pointSnow = new Image();
pointSnow.src = 'http://openweathermap.org/img/wn/13d@2x.png';



var weather_situation = [
    {
        "day": "2023-01-05",
        "temperature": [6,8,15,13,8,10,8,3],
        "weather":[pointSunny,pointSunny,pointCloudy,pointRain, pointRain, pointCloudy,pointCloudy,pointRain]
    },
    {
        "day": "2023-01-06",
        "temperature": [10,12,15,13,10,7,5,3],
        "weather":[pointSunny,pointSunny,pointSunny,pointCloudy, pointRain, pointRain,pointRain,pointRain]
    },
    {
        "day": "2023-01-07",
        "temperature": [3,5,5,4,5,3,2,1],
        "weather":[pointCloudy,pointCloudy,pointSunny,pointSunny, pointCloudy, pointSunny,pointSunny,pointCloudy]
    },
    {
        "day": "2023-01-08",
        "temperature": [-1,-1,-1,-1,-2,-3,-3,-3],
        "weather":[pointCloudy,pointSnow,pointSnow,pointSnow, pointSnow, pointSnow,pointCloudy,pointCloudy]
    },
    {
        "day": "2023-01-09",
        "temperature": [-2,-1,1,0,-1,-1,0,0],
        "weather":[pointCloudy,pointCloudy,pointSnow,pointSnow, pointCloudy, pointCloudy,pointSnow,pointSnow]
    }

]


var temperature;
var weather_situation;


onload= () => {
    
    let params = new URLSearchParams(location.search);
    var date = params.get('trip-start');
    document.getElementById("date").innerHTML = date;


    for(let i = 0; i < weather_situation.length; i++){
        if(date == weather_situation[i].day) {
            temperature= weather_situation[i].temperature;
            weather_situation = weather_situation[i].weather;
            break;
        }
    }
   
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "08h",
          "10h",
          "12h",
          "14h",
          "16h",
          "18h",
          "20h",
          "22h"
        ],
        datasets: [
          {
            label: "Temperature",
            data: temperature,
            backgroundColor: "rgba(250,128,114,0.5)",
            fill:false,
            borderColor : "rgba(250,128,114,0.5)",
            pointStyle : weather_situation,
            pointRadius: 20

          }
        ],
      },
        options : {
            legend: {
                display:false
            },
        elements:{
            point:{
            pointStyle: 'triangle'
            }
        },
        scales: {
                    yAxes: [{
                    gridLines:{
                        display:true
                    },
                        ticks: {
                            beginAtZero:false,
                            min: -5,
                            max: 20,
                            stepSize: 5    
                        }
                    }],
                    xAxes:[{
                    gridLines:{
                        display:true
                    },
                    ticks: {
                        display:false
                    }
                    
                    }]
                    }
        }
            });
        
}