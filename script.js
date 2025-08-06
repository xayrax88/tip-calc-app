// Get input elements
const billInput = document.getElementById('billInput');
const peopleInput = document.getElementById('peopleInput');
const tipInputButtons = document.querySelectorAll('.select-tip-button')
const customInput = document.getElementById('customInput');

// Get results element 
const totalAmount = document.querySelector('.total-amount')
const totalAmountPerPerson = document.querySelector('.total-person')


// Function to update results
function updateResults(tipAmount, totalAmountValue) {
    totalAmount.textContent = `$${tipAmount.toFixed(2)}`
    totalAmountPerPerson.textContent = `$${totalAmountValue.toFixed(2)}`
}

// Calculate tip as user enters %
// billTotal * percent / amountOfPeople = result
tipInputButtons.forEach((inputButton) => {
    inputButton.addEventListener("click", (e) => {
        e.preventDefault()

        tipPercentage = parseFloat(inputButton.innerText.replace("%", "")) / 100
        amount = parseFloat(billInput.value);
        people = peopleInput.value

        const tipAmount = (amount * tipPercentage) / people
        const totalAmountValue = (amount / people) + tipAmount

        updateResults(tipAmount, totalAmountValue)
    })
})


// Calculate tip as user enters custom %
function calculateCustomTip() {
    amount = parseFloat(billInput.value);
    people = peopleInput.value
    customTipPercentage = parseFloat(customInput.value) / 100

    const customTip = (amount * customTipPercentage) / people
    const totalAmountValue = (amount / people) + customTip

    updateResults(customTip, totalAmountValue)
}


// Clear results