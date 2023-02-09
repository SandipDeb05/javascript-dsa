function convertTheTemperature(celsius) {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32.0;

  return [kelvin, fahrenheit];
}

console.log(convertTheTemperature());
