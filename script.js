const btn = document.getElementById("btn");

function CheckFlag() {
  if (coinFrom.value.indexOf("Real") >= 0) {
    imgResultFrom.src = "./assets/brasil.png";
  } else if (coinFrom.value.indexOf("Euro") >= 0) {
    imgResultFrom.src = "./assets/euro.png";
  } else if (coinFrom.value.indexOf("Dolar") >= 0) {
    imgResultFrom.src = "./assets/dolar.png";
  }

  if (coinFor.value.indexOf("Real") >= 0) {
    imgResultFor.src = "./assets/brasil.png";
  } else if (coinFor.value.indexOf("Euro") >= 0) {
    imgResultFor.src = "./assets/euro.png";
  } else if (coinFor.value.indexOf("Dolar") >= 0) {
    imgResultFor.src = "./assets/dolar.png";
  }
}

function ErrorTreatment() {}
function showResult(amountToShow, resultToShow) {
  let amountShow = document.getElementById("amountFrom");
  let amountFor = document.getElementById("amountFor");
  amountShow.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
  }).format(amountToShow);
  amountFor.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
  }).format(resultToShow);
}

function calculate(valueFor, valueFrom) {
  let amount = document.getElementById("amount").value;
  let result = null;
  if (valueFor < valueFrom) {
    result = amount * valueFrom;
  } else if (valueFor > valueFrom) {
    result = amount / valueFor;
  }
  showResult(amount, result);
}

function FormatValues(coinForValuecb, coinFromValuecb) {
  let CoinForValue = null;
  let CoinFromValue = null;
  let imgResultFrom = document.getElementById("imgResultFrom");
  let imgResultFor = document.getElementById("imgResultFor");
  let resultFrom = document.getElementById("resultFrom");
  let resultFor = document.getElementById("resultFor");

  let coinFromResult = document.getElementById("coinFromResult");
  let coinForResult = document.getElementById("coinForResult");

  if (coinFromValuecb.indexOf("Real") >= 0) {
    CoinFromValue = 1;
    resultFrom.innerText = "Real";
    imgResultFrom.src = "./assets/brasil.png";
    coinFromResult.innerText = "R$";
  } else if (coinFromValuecb.indexOf("Euro") >= 0) {
    CoinFromValue = 5.23;
    imgResultFrom.src = "./assets/euro.png";
    resultFrom.innerText = "Euro";
    coinFromResult.innerText = "€";
  } else if (coinFromValuecb.indexOf("Dolar") >= 0) {
    CoinFromValue = 4;
    resultFrom.innerText = "Dolar";
    imgResultFrom.src = "./assets/dolar.png";
    coinFromResult.innerText = "US$";
  }

  if (coinForValuecb.indexOf("Real") >= 0) {
    CoinForValue = 1;
    resultFor.innerText = "Real";
    imgResultFor.src = "./assets/brasil.png";
    coinForResult.innerText = "R$";
  } else if (coinForValuecb.indexOf("Euro") >= 0) {
    CoinForValue = 5.23;
    resultFor.innerText = "Euro";
    imgResultFor.src = "./assets/euro.png";
    coinForResult.innerText = "€";
  } else if (coinForValuecb.indexOf("Dolar") >= 0) {
    CoinForValue = 4;
    resultFor.innerText = "Dolar";
    imgResultFor.src = "./assets/dolar.png";
    coinForResult.innerText = "US$";
  }

  calculate(CoinForValue, CoinFromValue);
}

function clicked() {
  const coinFor = document.getElementById("coinFor").value;
  const coinFrom = document.getElementById("coinFrom").value;
  FormatValues(coinFor, coinFrom);
}
btn.addEventListener("click", clicked);
