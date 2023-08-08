const containerDiv = document.querySelector(".container");

function createDivWithClass(className, content = "") {
  const div = document.createElement("div");
  div.classList.add(className);
  div.innerHTML = content;
  return div;
}

function createButtonWithClass(className, content = "") {
  const button = document.createElement("button");
  button.classList.add(className);
  button.innerHTML = content;
  return button;
}

// 1 big content
const bigContentDiv = createDivWithClass("bigContent");
containerDiv.appendChild(bigContentDiv);

// 2 menü
const menuDiv = createDivWithClass("menu");
menuDiv.textContent = "menu";
bigContentDiv.appendChild(menuDiv);

// 3 color button
const colorInput = document.createElement("input");
colorInput.type = "color";
colorInput.classList.add("form-control", "form-control-color", "color");
colorInput.id = "exampleColorInput";
colorInput.value = "black"; // Set a default color value
colorInput.title = "Choose your color";
menuDiv.appendChild(colorInput);

// 3 rainbow button
const rainbowButton = createButtonWithClass("rainbow");
rainbowButton.textContent = "rainbow";
menuDiv.appendChild(rainbowButton);

// 3 gray button
const grayButton = createButtonWithClass("gray");
grayButton.textContent = "gray";
menuDiv.appendChild(grayButton);

// 3 eraser button
const eraserButton = createButtonWithClass("eraser");
eraserButton.textContent = "eraser";
menuDiv.appendChild(eraserButton);

//2 content
const contentDiv = createDivWithClass("content");
//contentDiv.textContent = "content";
bigContentDiv.appendChild(contentDiv);

// 3 sketch
const sketchDiv = createDivWithClass("sketch");
contentDiv.appendChild(sketchDiv);

// 3 scroll
const scrollDiv = createDivWithClass("scroll");
scrollDiv.textContent = "Pixel Size";
contentDiv.appendChild(scrollDiv);

// 4 scrollbar
const rangeInput = document.createElement("input");
rangeInput.type = "range";
rangeInput.classList.add("formrange");
rangeInput.id = "customRange1";
rangeInput.min = 1;
rangeInput.max = 7;
rangeInput.step = 1;
rangeInput.style.accentColor = "#A5A6F6";
rangeInput.style.border = "none";
scrollDiv.appendChild(rangeInput);

rangeInput.addEventListener("input", () => {
  sketchDiv.innerHTML = "";
  let selectedValue = rangeInput.value;
  let pixelNumber = getPixelNumber(selectedValue);
  for (let i = 0; i < pixelNumber; i++) {
    for (let j = 0; j < pixelNumber; j++) {
      let div = createDivWithClass("pixel");
      div.style.height = `${600 / pixelNumber}px`;
      div.style.width = `${600 / pixelNumber}px`;
      div.addEventListener("mouseenter", () => {
        //div.classList.add("hover");
        div.style.backgroundColor = colorInput.value;
      });
      sketchDiv.appendChild(div);

      console.log(selectedValue);
    }
  }
});

function getPixelNumber(selectedValue) {
  let pixelNumber = 4;
  switch (parseInt(selectedValue)) {
    case 1:
      pixelNumber = 256;
      break;
    case 2:
      pixelNumber = 128;
      break;
    case 3:
      pixelNumber = 64;
      break;

    case 4:
      pixelNumber = 32;
      break;
    case 5:
      pixelNumber = 16;
      break;
    case 6:
      pixelNumber = 8;
      break;
    default:
      break;
  }
  return pixelNumber;
}

eraserButton.addEventListener("mouseenter", () => {});

// to do
//add rainbow button colorful hover
//add eraser button event listener
