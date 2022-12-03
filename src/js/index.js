const switchToggle = document.getElementById('switch')
const annuallyPrice = document.querySelectorAll('.price-annually')
const monthlyPrice = document.querySelectorAll('.price-monthly')

switchToggle.addEventListener('click', function (){
    
    for (let i = 0; i < monthlyPrice.length; i++) {
    if (switchToggle.checked) { 
       monthlyPrice[i].classList.add('aparecer')
       annuallyPrice[i].classList.add('ocultar')
       monthlyPrice[i].classList.remove('ocultar')
    } else {
        monthlyPrice[i].classList.remove('aparecer')
       annuallyPrice[i].classList.remove('ocultar')
       monthlyPrice[i].classList.add('ocultar')
    }
} })