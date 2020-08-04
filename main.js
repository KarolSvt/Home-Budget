let incomeSalary = document.querySelector('.incomeSalary');
const submit = document.querySelector('.submit')
let number = document.querySelector('.number');
let electricity = document.querySelector('.incomeElectricity');
let water = document.querySelector('.incomeWater');
let media = document.querySelector('.incomeMedia');
let other = document.querySelector('.incomeOther')
const refresh = document.querySelector('.refresh');



submit.addEventListener('click', () => {
    calculate()
})

function calculate(){   
    let bills =  incomeSalary.value - electricity.value
    console.log('po opłatach za prad: '+ bills)
    bills = bills - water.value
    console.log('po opłatach za wpde: '+ bills)
    bills = bills - media.value
    console.log('po oplatach za media '+ bills)
    bills = bills - other.value
    console.log('reszta oplat: ' + bills)

         number.innerHTML = bills;
        
}




refresh.addEventListener('click', (e) => {
    incomeSalary.value = "";
    number.innerHTML = 0;
    electricity.value = "";
    water.value = "";
    media.value = "";
    other.value = "";
})
