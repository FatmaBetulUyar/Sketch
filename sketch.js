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

// 1 header
const headerDiv = createDivWithClass("header");
headerDiv.textContent = "Etch a Scretch";
containerDiv.appendChild(headerDiv);

// 1 big content
const bigContentDiv = createDivWithClass("bigContent");
containerDiv.appendChild(bigContentDiv);

// 2 menü
const menuDiv = createDivWithClass("menu");
bigContentDiv.appendChild(menuDiv);

const colorHeaderDiv = createDivWithClass("colorHeader");
colorHeaderDiv.textContent = "Choose Your Color";
menuDiv.appendChild(colorHeaderDiv);

// 3 color button
const colorInput = document.createElement("input");
colorInput.type = "color";
colorInput.classList.add("form-control", "form-control-color", "color");
colorInput.id = "exampleColorInput";
colorInput.value = "black"; // Set a default color value
colorInput.title = "Choose your color";
colorInput.textContent = "chose";
menuDiv.appendChild(colorInput);

// 3 rainbow button
const rainbowButton = createButtonWithClass("rainbow");
rainbowButton.textContent = "rainbow";
menuDiv.appendChild(rainbowButton);

// 3 gray button
const grayButton = createButtonWithClass("gray");
grayButton.textContent = "gray";
menuDiv.appendChild(grayButton);

// 3 clear button
const clearButton = createButtonWithClass("clear");
clearButton.textContent = "clear";
menuDiv.appendChild(clearButton);

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
rangeInput.style.accentColor = "#ACFADF";
rangeInput.defaultValue = 7;
rangeInput.style.border = "none";
rangeInput.value = 7;
scrollDiv.appendChild(rangeInput);
let selectedValue = 7;
let eraserClicked = false;
let clearClicked = false;
let rainbowClicked = false;
let grayClicked = false;
updateSketchDiv();

function updateSketchDiv(params) {
  sketchDiv.innerHTML = "";

  let pixelNumber = getPixelNumber(selectedValue);
  for (let i = 0; i < pixelNumber; i++) {
    for (let j = 0; j < pixelNumber; j++) {
      let div = createDivWithClass("pixel");
      div.style.height = `${600 / pixelNumber}px`;
      div.style.width = `${600 / pixelNumber}px`;
      div.addEventListener("mouseenter", () => {
        //div.classList.add("hover");
        div.style.backgroundColor = colorInput.value;

        if (eraserClicked) {
          div.style.backgroundColor = "white";
        }
        if (rainbowClicked) {
          div.style.backgroundColor = getRandomColor();
        }
        if (grayClicked) {
          div.style.backgroundColor = getRandomGrayColors();
        }
      });
      sketchDiv.appendChild(div);

      console.log(selectedValue);
    }
  }
}
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomGrayColors() {
  const randomShade = Math.floor(Math.random() * 256); // 0 ile 255 arasında rastgele bir değer
  const grayColor = `rgb(${randomShade}, ${randomShade}, ${randomShade})`;
  return grayColor;
}

rangeInput.addEventListener("input", () => {
  selectedValue = rangeInput.value;
  eraserClicked = false;
  updateSketchDiv();
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

clearButton.addEventListener("click", () => {
  clearClicked = true;
  if (clearClicked) {
    sketchDiv.innerHTML = "";
  }
  updateSketchDiv();
});
eraserButton.addEventListener("click", () => {
  eraserClicked = true;
  rainbowClicked = false;
  clearClicked = false;
  grayClicked = false;
});

rainbowButton.addEventListener("click", () => {
  rainbowClicked = true;
  clearClicked = false;
  grayClicked = false;
});

grayButton.addEventListener("click", () => {
  grayClicked = true;
});

colorInput.addEventListener("click", () => {
  eraserClicked = false;
  rainbowClicked = false;
  clearClicked = false;
  grayClicked = false;
});
