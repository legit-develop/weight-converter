const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");

function updateResults() {
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = `${inputEl.value} is invalid input`;
    setTimeout(() => {
      errorEl.innerText = "";
    }, 2000);
  }
}

inputEl.addEventListener("input", updateResults);
