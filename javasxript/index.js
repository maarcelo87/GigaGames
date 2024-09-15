/*Alterar o preço*/
function updatePrice(selectElement) {
  const selectedPrice = selectElement.value;
  const priceElement = selectElement.parentElement.querySelector(".price");
  priceElement.textContent = parseFloat(selectedPrice).toFixed(2);
}

document.getElementById("toggle-header").addEventListener("click", function () {
  var header = document.querySelector(".header");
  header.classList.toggle("minimized");

  // Alterna o texto do botão
  if (header.classList.contains("minimized")) {
    this.textContent = "Expandir";
  } else {
    this.textContent = "Minimizar";
  }
});
