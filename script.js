let $ = document

let Texttitle = $.querySelector('.title')
let input = $.querySelector('.input')
let verification = $.querySelector('.verification')
let convertBtn = $.querySelector('.convert')
let resetBtn = $.querySelector('.reset')
let changeBtn = $.querySelector('.change')

let Ctype = true

convertBtn.addEventListener('click', function () {

    let inputValue = input.value

    if (Ctype) {
        let farenhaet = (inputValue * 1.8) + 32
        verification.style.color = 'white'
        verification.innerHTML = inputValue + '°C' + ' to ' + farenhaet + '°F'
    }
    else {
        let cantigrade = ((inputValue - 32) * (5 / 9))
        verification.style.color = 'white'
        verification.innerHTML = inputValue + '°F' + ' to ' + cantigrade.toFixed(2) + '°C'
    }

})
resetBtn.addEventListener('click', function () {

    if (Ctype) {
        verification.style.color = 'lightblue'
        verification.innerHTML = 'Enter °C temp '
        input.value = ''
    }
    else {
        verification.style.color = 'lightblue'
        verification.innerHTML = 'Enter °F temp '
        input.value = ''


    }

})
changeBtn.addEventListener('click', function () {

    if (Ctype) {
        Texttitle.innerHTML = "Converter °F to °C "
        $.title = 'Converter °F to °C'
        input.setAttribute("placeholder", '°F')
        verification.innerHTML = ''

        Ctype = false
    } else {
        Texttitle.innerHTML = "Converter °C to  °F"
        $.title = 'Converter °C to  °F'
        input.setAttribute("placeholder", '°C')
        verification.innerHTML = ''

        Ctype = true
    }


})





