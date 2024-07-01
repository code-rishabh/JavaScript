
const button = document.getElementById('click-btn');
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');


button.addEventListener('click', async () => {
    const report = await navigator.geolocation.getCurrentPosition(gotLocation, failedToGetLoaction);
})

const getData = async (lat, long) => {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=0a29ef8620da4d09b8c130815242706&q=${lat},${long}&aqi=yes`);
    return data.json();


}

const gotLocation = async (position) => {
    const report = await getData(position.coords.latitude, position.coords.longitude)
    console.log(report)
    cityName.innerText = `${report.location.name}, ${report.location.region}, ${report.location.country}`;
    cityTime.innerText = `Localtime: ${report.location.localtime}`;
    cityTemp.innerText = ` Celcius: ${report.current.temp_c} deg C, Fahrenheit: ${report.current.temp_f} deg F`;

}

const failedToGetLoaction = (err) => {
    console.log(err);
}

