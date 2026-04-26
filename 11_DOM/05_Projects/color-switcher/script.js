// Select all color buttons and the element to display the color code
const colorButtons = document.querySelectorAll(".color-btn");
const colorCode = document.getElementById("color-code");

// Function to update the background color and display the color code
const updateColor = (color) => {
  document.body.style.backgroundColor = color;
  colorCode.textContent = color;
};

// Add click event listeners to each color button
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.dataset.color;
    updateColor(color);
  });
});
