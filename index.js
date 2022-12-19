



const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


const meterToFeet =  3.281
const feetToMeter = 0.305
const literToGallon =  0.264
const gallonToLiter = 3.788
const kiloToPound =  2.204
const poundToKilo = 0.454



convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = 
        `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | 
        ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters`

    volumeEl.textContent = 
        `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} | 
        ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters`
    
    massEl.textContent = 
        `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} | 
        ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(3)} kilos`

})
//
//