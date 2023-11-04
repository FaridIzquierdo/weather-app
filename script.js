let baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey = 'c9335f5499226d34a664fc52682dbc04';    
let difKelvin = 273.15;


document.getElementById('botonBusqueda').addEventListener('click',() =>{
    const city = document.getElementById('ciudadEntrada').value; 
    if(city){
        fetchDatosClima(city);
    }
})

document.getElementById('ciudadEntrada').addEventListener('click', () => {
    const city = document.getElementById('ciudadEntrada').value; 
    if(city){
        fetchDatosClima(city);
    }
})

function fetchDatosClima(city){
    fetch(`${baseUrl}?q=${city}&appid=${apiKey}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    //console.log(data);
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const nameCity = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const cityTitle = document.createElement('h2');
    cityTitle.textContent = nameCity;

    const temperatureInfo = document.createElement('p');
    temperatureInfo.textContent = `Temperatura: ${Math.floor(temperature - difKelvin)}°C`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `Humedad: ${data.main.humidity}%`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `Descripción: ${description}`;

    divDatosClima.appendChild(cityTitle);
    divDatosClima.appendChild(temperatureInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descriptionInfo);
}