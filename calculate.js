const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

/* Load saved theme */
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

/* Toggle theme */
toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";

  toggleBtn.classList.add("rotate");
  setTimeout(() => toggleBtn.classList.remove("rotate"), 350);
});
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});
const wordSpan = document.querySelector(".word");
const words = ["Know", "Keep"];
let index = 0;

setInterval(() => {
  wordSpan.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % words.length;
    wordSpan.textContent = words[index];

    wordSpan.classList.remove("fade-out");
wordSpan.classList.add("fade-in");

setTimeout(() => {
  wordSpan.classList.remove("fade-in");
}, 1200);

  }, 350);
}, 2500);

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const genderInput = document.getElementById("gender");
const button = document.querySelector(".bmi-btn");
const display = document.querySelector(".pulse-center");
const resultText = document.getElementById("bmiResult");

function calculateBMI(height, weight) {
  const h = height / 100;
  return +(weight / (h * h)).toFixed(1);
}

function getBMIState(bmi) {
  if (bmi < 18.5) return { state: "medium", label: "Underweight" };
  if (bmi < 25) return { state: "good", label: "Normal" };
  if (bmi < 30) return { state: "medium", label: "Overweight" };
  return { state: "alarming", label: "Obese" };
}

function animateDigits(finalValue, state) {
  let count = 0;
  const interval = setInterval(() => {
    display.textContent = (Math.random() * 40).toFixed(1);
    count++;

    if (count > 20) {
      clearInterval(interval);
      display.textContent = finalValue;
      display.className = "pulse-center";
      display.parentElement.className = `hero-art ${state}`;
    }
  }, 50);
}

button.addEventListener("click", () => {
  const height = +heightInput.value;
  const weight = +weightInput.value;
  const gender = genderInput.value;

  if (!height || !weight || !gender) {
    resultText.textContent = "Please fill all fields.";
    return;
  }

  const bmi = calculateBMI(height, weight);
  const { state, label } = getBMIState(bmi);

  animateDigits(bmi, state);
}

);
