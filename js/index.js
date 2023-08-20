var day = document.getElementById("day");
var dayNumber = document.getElementById("dayNumber");
var dayMounth = document.getElementById("dayMounth");
var locDay = document.getElementById("locDay");
var dayTemp = document.getElementById("dayTemp");
var dayImage = document.getElementById("dayImage");
var dayText = document.getElementById("dayText");
var humDay = document.getElementById("humDay");
var windDay = document.getElementById("windDay");
var windDec = document.getElementById("windDec");

// 
var nextDay = document.getElementsByClassName("nextDAY");
var nextImage = document.getElementsByClassName("nextImage");
var nextMax = document.getElementsByClassName("nextMax");
var nextMutid = document.getElementsByClassName("nextMutid");
var nextText = document.getElementsByClassName("nextText");

// 
var searchInput = document.getElementById("searchInput")


// 
 async function getDate(city)
 {
    var https = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=7`);
    var lool=  await https.json();
    return lool
}
// 


function displayToday(weather){
    var da = new Date()
    day.innerHTML = da.toLocaleDateString("en-us",{weekday:"long"})
    dayNumber.innerHTML = da.getDate()
    dayMounth.innerHTML =da.toLocaleDateString("en-us",{month:"long"})
    locDay.innerHTML = weather.location.name
    dayTemp.innerHTML = weather.current.temp_c
    dayImage.setAttribute("src",weather.current.condition.icon)
    dayText.innerHTML = weather.current.condition.text
    humDay.innerHTML = weather.current.humidity+"%"
    windDay.innerHTML = weather.current.wind_kph+"km/h"
    windDec.innerHTML = weather.current.wind_dir
}
// 
function displayNext(weather){
    var foce = weather.forecast.forecastday
    
    for (var i = 0; i < 2; i++) {
        var nextDa = new Date(foce[i+1].date)
        console.log(nextDa);
        nextDay[i].innerHTML= nextDa.toLocaleDateString("en-us",{weekday:"long"})
        nextMax[i].innerHTML = foce[i+1].day.maxtemp_c+`<span > <sup>o</sup>c</span>`
        nextMutid[i].innerHTML = foce[i+1].day.mintemp_c+`<span > <sup>o</sup>c</span>`
        nextImage[i].setAttribute("src",foce[i+1].day.condition.icon)
        nextText[i].innerHTML = foce[i+1].day.condition.text
    }
}
// 
async function play(city="qater"){
   var lool= await getDate(city);
   displayToday(lool)
   displayNext(lool)
}
play()




searchInput.addEventListener("input",function(){
    play(searchInput.value);
})