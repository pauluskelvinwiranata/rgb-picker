const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");
const colorPreview = document.querySelector(".color-preview");
const rgbCode = document.getElementById("rgbCode");
const copyButton = document.getElementById("copyButton");

function updateColorPreview() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  colorPreview.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  rgbCode.textContent = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

function copyColorCode() {
  const textArea = document.createElement("textarea");
  textArea.value = rgbCode.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  copyButton.textContent = "Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 2000);
}

redSlider.addEventListener("input", updateColorPreview);
greenSlider.addEventListener("input", updateColorPreview);
blueSlider.addEventListener("input", updateColorPreview);
copyButton.addEventListener("click", copyColorCode);

updateColorPreview();
