const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

let redValue = 0, greenValue = 0, blueValue = 0;

// handle red values //

function handleRedValue() {
  redValue = this.value;
  rgbValues.textContent = `rgb(${redValue},${greenValue},${blueValue})`;
  handleRGBValues(rgbValues.textContent);
}

red.addEventListener('change', handleRedValue);
red.addEventListener('mousemove', handleRedValue);

// handle green values //

function handleGreenValue() {
  greenValue = this.value;
  rgbValues.textContent = `rgb(${redValue},${greenValue},${blueValue})`;
  handleRGBValues(rgbValues.textContent);
}
green.addEventListener('change', handleGreenValue);
green.addEventListener('mousemove', handleGreenValue);

// handle blue values //

function handleBlueValue() {
  blueValue = this.value;
  rgbValues.textContent = `rgb(${redValue},${greenValue},${blueValue})`;
  handleRGBValues(rgbValues.textContent);
}
blue.addEventListener('change', handleBlueValue);
blue.addEventListener('mousemove', handleBlueValue);

// handle rgb values //

const rgbValues = document.querySelector("#rgb");

function handleRGBValues(rgbValues) {
  document.documentElement.style.setProperty("--bg-color", rgbValues);

  if (rgbValues == "rgb(255,255,255)") { invertBlack() }
  else { invertWhite() }

  // copy rgb value to clipboard //

  const body = document.getElementsByTagName('body')[0];
  const copyButton = document.querySelector('#copy-button');
  const rgbField = document.getElementById('rgbValue').textContent;

  let copyRGB = function(rgbField) {
    let tempInput = document.createElement('INPUT');
    body.appendChild(tempInput);
    tempInput.setAttribute('value', rgbValues);
    tempInput.select();
    document.execCommand('copy');
    body.removeChild(tempInput);
  }

  copyButton.addEventListener('click', function(e) {
    copyRGB(rgbField);

  })
}

// invert color handler //
function invertBlack() {
  document.documentElement.style.setProperty("--default-text", "black");
  document.documentElement.style.setProperty("--default-bg", "black");
}

function invertWhite() {
  document.documentElement.style.setProperty("--default-text", "white");
  document.documentElement.style.setProperty("--default-bg", "white");
}

// night & day mode toggle - incomplete //
// const nightButton = document.querySelector('#night-mode');

// const dayButton = document.querySelector('#day-mode');

// function makeDay() {
//   document.documentElement.style.setProperty('--bg-color', 'white');

//   document.documentElement.style.setProperty('--text', 'black');
// }

// dayButton.addEventListener('click', makeDay);