const angkaSatu = document.getElementById(angka1);
const angkaDua = document.getElementById(angka2);

const button = document.querySelector("#hasil");

button.addEventListener("click", function () {
  if (angkaSatu.value === "" || angkaDua.value === "") console.log(123);
});
