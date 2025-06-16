function convertTemperature() {
  const temp = parseFloat(document.getElementById('temperature').value);
  const from = document.getElementById('fromUnit').value;
  const to = document.getElementById('toUnit').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(temp)) {
    resultDiv.innerText = '❗ Please enter a valid number';
    return;
  }

  let tempInC;

  // Convert to Celsius
  switch (from) {
    case 'C': tempInC = temp; break;
    case 'F': tempInC = (temp - 32) * 5 / 9; break;
    case 'K': tempInC = temp - 273.15; break;
    case 'R': tempInC = (temp - 491.67) * 5 / 9; break;
  }

  let converted;

  // Convert from Celsius to target unit
  switch (to) {
    case 'C': converted = tempInC; break;
    case 'F': converted = (tempInC * 9 / 5) + 32; break;
    case 'K': converted = tempInC + 273.15; break;
    case 'R': converted = (tempInC + 273.15) * 9 / 5; break;
  }

  resultDiv.innerText = `Converted Temperature: ${converted.toFixed(2)}°${to}`;
}

