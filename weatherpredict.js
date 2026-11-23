const button = document.getElementById("weatherBtn"); 

const result = document.getElementById("weatherResult"); 

 

button.addEventListener("click", getWeather); 

 

async function getWeather() { 

 

    result.textContent = "Loading weather..."; 

 

    try { 

        const response = await fetch( 

            "https://api.open-meteo.com/v1/forecast?latitude=39.92&longitude=32.85&current=temperature_2m" 

        ); 

 

        if (!response.ok) { 

            throw new Error("Failed to retrieve weather"); 

        } 

 

        const data = await response.json(); 

 

        const temperature = data.current.temperature_2m; 

 

        result.textContent = "Current Temperature: " + temperature + " °C"; 

 

    } catch (error) { 

        result.textContent = "Unable to load weather."; 

        console.log("Error:", error.message); 

    } 

} 