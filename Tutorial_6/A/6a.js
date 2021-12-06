function CelsiusIntoFahrenheit(e) {
    const inputCelsius = document.getElementById('celsius').value;
    let result=inputCelsius*(9/5)+32;
    console.log(inputCelsius);
    document.getElementById("fahrenheit").value = result;
}