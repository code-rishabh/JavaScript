const button = document.getElementById('search-button');
const input = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');


const getData = async (cityName) => {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=0a29ef8620da4d09b8c130815242706&q=${cityName}&aqi=yes`);
return data.json();

}

button.addEventListener('click', async () => {
    const city = input.value;
    const report = await getData(city);
    cityName.innerText = `${report.location.name}, ${report.location.region}, ${report.location.country}`;
    cityTime.innerText = ` ${report.location.localtime}`;
    cityTemp.innerText = ` Celcius: ${report.current.temp_c} deg C, Fahrenheit: ${report.current.temp_f} deg F`;
    // console.log(report);
});
