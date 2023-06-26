const btn = document.getElementById("btn");
const coinFor = document.getElementById("coinFor");
const coinFrom = document.getElementById("coinFrom");
// if (coinFor.value === coinFrom.value) {
//   alert("Valores igual, por favor verificar e tentar novamente");
// }

function ErrorTreatment() {
  let CoinForValue = null;
  let CoinFromValue = null;
  let amount = document.getElementById("amount").value;
  let result = null;

  if (coinFrom.value.indexOf("Real") >= 0) {
    CoinFromValue = 1;
  } else if (coinFrom.value.indexOf("Euro") >= 0) {
    CoinFromValue = 5.23;
  } else if (coinFrom.value.indexOf("Dolar") >= 0) {
    CoinFromValue = 4;
  }

  if (coinFor.value.indexOf("Real") >= 0) {
    CoinForValue = 1;
  } else if (coinFor.value.indexOf("Euro") >= 0) {
    CoinForValue = 5.23;
  } else if (coinFor.value.indexOf("Dolar") >= 0) {
    CoinForValue = 4;
  }

  if (CoinForValue < CoinFromValue) {
    result = amount * CoinFromValue;
  } else if (CoinForValue > CoinFromValue) {
    result = amount / CoinForValue;
  }
  console.log("valor a " + CoinFromValue);
  console.log("valor b" + CoinForValue);
  console.log(result);
}
function Conversion() {}

btn.addEventListener("click", ErrorTreatment);

// se o primeiro for maior que o segundo for mutiplica, senão voce divide
