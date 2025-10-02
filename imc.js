document.addEventListener("DOMContentLoaded", () => {
    const nome = document.querySelector('#nome')
    const altura = document.querySelector('#altura')
    const peso = document.querySelector('#peso')
    const button = document.querySelector('#button')
    const form = document.querySelector("form")
    const p = document.querySelector('p')
    
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
    })

    button.addEventListener('click', () => {
        let imc = peso.value / (altura.value * altura.value)
        if(imc < 18.5){
            p.innerText = nome.value + imc + "Você esta com anorexia"
        }
        else if(imc > 18.5 && imc < 24.9){
            p.innerText = nome.value + imc + "Você esta no peso ideal"
        }
        else if(imc >= 25 && imc < 29.9){
            p.innerText = nome.value + imc + "Você esta acima do peso"
        }
        else{
            p.innerText = nome.value + imc + "Você esta com obesidade   "
        }
    })



})