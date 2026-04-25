const currCount = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  currCount.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  count--;
  currCount.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  currCount.textContent = count;
});
