document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '5dac13391feedfa00f7029922f189a5f';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${'5dac13391feedfa00f7029922f189a5f'}&units=metric`;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${'5dac13391feedfa00f7029922f189a5f'}&units=metric`;
         )
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            document.getElementById('weatherResult').innerHTML = `
                <p>Weather in ${city}: ${weatherDescription}</p>
                <p>Temperature: ${temperature} °C</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
        });
});
