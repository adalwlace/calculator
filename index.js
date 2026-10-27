const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value || button.textContent;

    if (value === "C") {
      display.value = "";
      return;
    }

    if (value === "=") {
      try {
        const result = Function(`"use strict"; return (${display.value})`)();
        display.value = Number.isFinite(result) ? result : "Error";
      } catch {
        display.value = "Error";
      }
      return;
    }

    display.value += value;
  });
});