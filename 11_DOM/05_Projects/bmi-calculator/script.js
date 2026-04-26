const form = document.getElementById("bmi-form");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultBox = document.getElementById("result");
const bmiValue = document.getElementById("bmi-value");
const bmiStatus = document.getElementById("bmi-status");

const calculateBMI = (height, weight) => {
  const heightInMeters = height / 100;
  return (weight / (heightInMeters * heightInMeters)).toFixed(2);
};

const getBMIStatus = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
  if (bmi >= 25 && bmi < 29.9) return "Overweight";
  return "Obese";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (!height || !weight) return;

  const bmi = calculateBMI(height, weight);
  const status = getBMIStatus(bmi);

  bmiValue.textContent = bmi;
  bmiStatus.textContent = status;

  resultBox.classList.remove("hidden");
});
