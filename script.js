const btn = document.getElementById("btn");

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
  let coinFromResult = document.getElementById("coinFromResult");
  let coinForResult = document.getElementById("coinForResult");
  let imgResultFrom = document.getElementById("imgResultFrom");
  let imgResultFor = document.getElementById("imgResultFor");
  let resultFrom = document.getElementById("resultFrom");
  let resultFor = document.getElementById("resultFor");

  const coinValues = {
    Real: {
      value: 1,
      image: "./assets/brasil.png",
      symbol: "R$",
      label: "Real",
    },
    Euro: {
      value: 5.23,
      image: "./assets/euro.png",
      symbol: "€",
      label: "Euro",
    },
    Dolar: {
      value: 4,
      image: "./assets/dolar.png",
      symbol: "US$",
      label: "Dolar",
    },
  };

  let coinFromValue = coinValues[coinFromValuecb];
  resultFrom.innerText = coinFromValue.label;
  imgResultFrom.src = coinFromValue.image;
  coinFromResult.innerText = coinFromValue.symbol;

  let coinForValue = coinValues[coinForValuecb];
  resultFor.innerText = coinForValue.label;
  imgResultFor.src = coinForValue.image;
  coinForResult.innerText = coinForValue.symbol;

  calculate(coinForValue.value, coinFromValue.value);
}

function clicked() {
  const coinFor = document.getElementById("coinFor").value;
  const coinFrom = document.getElementById("coinFrom").value;
  FormatValues(coinFor, coinFrom);
}

btn.addEventListener("click", clicked);
