// Get input elements
const billInput = document.getElementById('billInput');
const peopleInput = document.getElementById('peopleInput');
const tipInputButtons = document.querySelectorAll('.select-tip-button')
const customInput = document.getElementById('customInput');

// Get results element 
const totalAmount = document.querySelector('.total-amount')
const totalPerson = document.querySelector('.total-person')

// Calculate tip as user enters percentage
// billTotal * percent / amountOfPeople = result
tipInputButtons.forEach((inputButton) => {
    inputButton.addEventListener("click", (e) => {
        e.preventDefault()

        tipPercentage = parseFloat(inputButton.innerText.replace("%", "")) / 100
        amount = parseFloat(billInput.value);
        people = peopleInput.value

        console.log(tipPercentage)
    })
})


// Calculate tip as user enters custom percentage



// Clear results