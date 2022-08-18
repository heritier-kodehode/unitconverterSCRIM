const inputElem = document.getElementById("input-elem");
const btnElem = document.getElementById("btn-elem");
const lengthElem = document.getElementById("length");
const volumeElem = document.getElementById("volume");
const massElem = document.getElementById("mass");
showResults(1)
btnElem.addEventListener("click", ()=>{
   showResults(inputElem.value)
})

function metersToFeet(meter){
    let feet = Math.abs(meter * 3.28084);
    return feet.toFixed(3);
}
function feetToMeters(feet){
    let meter = Math.abs(feet / 3.28084);
   return meter.toFixed(3);

}

function literToGallons(liter){
    let gallons = Math.abs(liter * 0.264172)
    return gallons.toFixed(3);
}

function gallonsToLiters(gallons){
    let liter = Math.abs(gallons / 0.264172)
    return liter.toFixed(3);

}

function kiloToPounds(kilo){
    let pounds = Math.abs(kilo * 2.2046);
    return pounds.toFixed(3);
}

function poundsToKilo(pounds){
    let kilo = Math.abs(pounds / 2.2046)
    return kilo.toFixed(3);
}

function showResults(ourNumToConvert){
    let meterResults = feetToMeters(ourNumToConvert);
    let feetResults = metersToFeet(ourNumToConvert);
    let literResults = gallonsToLiters(ourNumToConvert);
    let gallonsResults = literToGallons(ourNumToConvert);
    let kilosResults = poundsToKilo(ourNumToConvert);
    let poundsResults = kiloToPounds(ourNumToConvert);
    lengthElem.textContent = `${ourNumToConvert} meters = ${feetResults} feet || ${ourNumToConvert} feet = ${meterResults} meters`
    volumeElem.textContent = `${ourNumToConvert} liters = ${gallonsResults} gallons || ${ourNumToConvert} gallons = ${literResults} liters`
    massElem.textContent = `${ourNumToConvert} kilos = ${poundsResults} pounds || ${ourNumToConvert} pounds = ${kilosResults} kilos`
}
