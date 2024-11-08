const firstNum = document.getElementById("first");
const secNum = document.getElementById("second");
const button = document.getElementById("submit");
const popup = document.getElementById("popup");

function handleSubmit() {
  if (firstNum.value === "" || secNum.value === "") {
    popup.innerHTML =
      "Masukan angka terlebih dahulu!<button id='closePopup'>OK</button>";
    popup.classList.add("active");
    document.getElementById("closePopup").addEventListener("click", closePopup);
  } else {
    const num1 = parseFloat(firstNum.value);
    const num2 = parseFloat(secNum.value);

    if (num2 === 0) {
      popup.innerHTML = `<p>Error: Pembagian dengan ${num2} tidak diperbolehkan</p> <button id='closePopup'>OK</button>`;
      popup.classList.add("active");
      document
        .getElementById("closePopup")
        .addEventListener("click", closePopup);
    }
    const result = num1 / num2;

    popup.innerHTML = `<p>Hasil pembagian ${num1} : ${num2} adalah ${result} </p>
        <button id='closePopup'>OK</button>
        `;

    popup.classList.add("active");

    document.getElementById("closePopup").addEventListener("click", closePopup);
    document.getElementById("keydown", closePopupOnEnter);
  }
}

function closePopup() {
  popup.classList.remove("active");
  document.removeEventListener("keydown", closePopupOnEnter);
}

function closePopupOnEnter(event) {
  if (event.key === "Enter") {
    closePopup();
  }
}

firstNum.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    secNum.focus();
  }
});

secNum.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault;
    handleSubmit();
  }
});

button.addEventListener("click", handleSubmit);
