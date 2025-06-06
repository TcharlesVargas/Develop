const convertButton = document.querySelector(".convert-button") 
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrency = document.querySelector(".conversion-value").value
    const currencyValueToConvert = document.querySelector(".currency-value1")
    const currencyValueConverted = document.querySelector(".currency-value2")
    
    console.log(currencySelect.value)
    const dolarToday = 5.6
    const euroToday = 6.4
    const libraToday = 7.6
    const bitcoinToday = 575099.0

    const convertedValue1 = inputCurrency / euroToday

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrency / dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrency / euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrency / libraToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrency / bitcoinToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)

}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

        if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/USD.png"
    }

        if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/EURO.png"
    }
        if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/LIBRA.png"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/BTC.png"
    }
   
}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
