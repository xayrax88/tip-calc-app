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

//error functions
// function showError() {
//     document.querySelector(".error").classList.add("active");
//     peopleInput.classList.add("error-active");
// }

// function clearError() {
//     document.querySelector(".error").classList.remove("active");
//     peopleInput.classList.remove("error-active");
// }


// Calculate tip as user enters %
// billTotal * percent / amountOfPeople = result
tipInputButtons.forEach((inputButton) => {
    inputButton.addEventListener("click", (e) => {
        e.preventDefault()

        tipPercentage = parseFloat(inputButton.innerText.replace("%", "")) / 100
        amount = parseFloat(billInput.value);
        people = peopleInput.value

        if (people <= 0) {
            document.querySelector(".error").classList.toggle("active")
            peopleInput.classList.toggle("error-active");
            return
        }

        const tipAmount = (amount * tipPercentage) / people
        const totalAmountValue = (amount / people) + tipAmount

        updateResults(tipAmount, totalAmountValue)
    })
})


// Calculate tip as user enters custom %
//parseFloat - to convert % to decimal value
function calculateCustomTip() {
    amount = parseFloat(billInput.value);
    people = peopleInput.value
    customTipPercentage = parseFloat(customInput.value) / 100

    const customTip = (amount * customTipPercentage) / people
    const totalAmountValue = (amount / people) + customTip

    updateResults(customTip, totalAmountValue)
}


// Clear results
document.querySelector('.reset-btn').addEventListener('click', () => {
    totalAmount.innerHTML = "$0.00"
    totalAmountPerPerson.innerHTML = "$0.00"
    // customInput.innerHTML = "Custom"
    billInput.value = ""
    peopleInput.value = ""
    customInput.value = "Custom"
})