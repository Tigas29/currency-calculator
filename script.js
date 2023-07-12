const btn = document.getElementById("btn");
const coinFor = document.getElementById("coinFor");
const coinFrom = document.getElementById("coinFrom");
// if (coinFor.value === coinFrom.value) {
//   alert("Valores igual, por favor verificar e tentar novamente");
// }

function Formatar() {}
function ErrorTreatment() {
  let result = null;
  let amountShow = document.getElementById("amountFrom");
  let imgResultFrom = document.getElementById("imgResultFrom");
  let imgResultFor = document.getElementById("imgResultFor");
  let resultFrom = document.getElementById("resultFrom");
  let resultFor = document.getElementById("resultFor");
  let amountFor = document.getElementById("amountFor");
  let coinFromResult = document.getElementById("coinFromResult");
  let coinForResult = document.getElementById("coinForResult");

  if (coinFrom.value.indexOf("Real") >= 0) {
    CoinFromValue = 1;
    imgResultFrom.src = "./assets/brasil.png";
    resultFrom.innerText = "Real";
    coinFromResult.innerText = "R$";
  } else if (coinFrom.value.indexOf("Euro") >= 0) {
    CoinFromValue = 5.23;
    imgResultFrom.src = "./assets/euro.png";
    resultFrom.innerText = "Euro";
    coinFromResult.innerText = "€";
  } else if (coinFrom.value.indexOf("Dolar") >= 0) {
    CoinFromValue = 4;
    imgResultFrom.src = "./assets/dolar.png";
    resultFrom.innerText = "Dolar";
    coinFromResult.innerText = "US$";
  }

  if (coinFor.value.indexOf("Real") >= 0) {
    CoinForValue = 1;
    resultFor.innerText = "Real";
    imgResultFor.src = "./assets/brasil.png";
    coinForResult.innerText = "R$";
  } else if (coinFor.value.indexOf("Euro") >= 0) {
    CoinForValue = 5.23;
    resultFor.innerText = "Euro";
    imgResultFor.src = "./assets/euro.png";
    coinForResult.innerText = "€";
  } else if (coinFor.value.indexOf("Dolar") >= 0) {
    CoinForValue = 4;
    resultFor.innerText = "Dolar";
    imgResultFor.src = "./assets/dolar.png";
    coinForResult.innerText = "US$";
  }

  amountShow.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
  }).format(amount);
  amountFor.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
  }).format(result);
}
function showData() {
  if (coinFromV.indexOf("Real") >= 0) {
    imgResultFrom.src = "./assets/brasil.png";
    resultFrom.innerText = "Real";
    coinFromResult.innerText = "R$";
  } else if (coinFromV.indexOf("Euro") >= 0) {
    imgResultFrom.src = "./assets/euro.png";
    resultFrom.innerText = "Euro";
    coinFromResult.innerText = "€";
  } else if (coinFromV.indexOf("Dolar") >= 0) {
    imgResultFrom.src = "./assets/dolar.png";
    resultFrom.innerText = "Dolar";
    coinFromResult.innerText = "US$";
  }
  if (coinForV.indexOf("Real") >= 0) {
    resultFor.innerText = "Real";
    imgResultFor.src = "./assets/brasil.png";
    coinForResult.innerText = "R$";
  } else if (coinForV.indexOf("Euro") >= 0) {
    resultFor.innerText = "Euro";
    imgResultFor.src = "./assets/euro.png";
    coinForResult.innerText = "€";
  } else if (coinForV.indexOf("Dolar") >= 0) {
    resultFor.innerText = "Dolar";
    imgResultFor.src = "./assets/dolar.png";
    coinForResult.innerText = "US$";
  }
}
function calculate(valueFor, ValueFrom) {
  let result;
  let amount = document.getElementById("amount").value;

  if (valueFor < ValueFrom) {
    result = amount * ValueFrom;
  } else if (valueFor > ValueFrom) {
    result = amount / valueFor;
  }

  console.log(result);
}
function getDatas(coinForV) {
  let CoinForValue = null;
  let CoinFromValue = null;
  if (coinFromV.indexOf("Real") >= 0) {
    CoinFromValue = 1;
  } else if (coinFromV.indexOf("Euro") >= 0) {
    CoinFromValue = 5.23;
  } else if (coinFromV.indexOf("Dolar") >= 0) {
    CoinFromValue = 4;
  }

  if (coinForV.indexOf("Real") >= 0) {
    CoinForValue = 1;
  } else if (coinForV.indexOf("Euro") >= 0) {
    CoinForValue = 5.23;
  } else if (coinForV.indexOf("Dolar") >= 0) {
    CoinForValue = 4;
  }
  calculate(coinForValue, coinFromValue);
}

function ClicketButton() {
  const coinFor = document.getElementById("coinFor");
  const coinFrom = document.getElementById("coinFrom");
  getDatas(coinFor, coinFrom);
}

btn.addEventListener("click", ClicketButton);
