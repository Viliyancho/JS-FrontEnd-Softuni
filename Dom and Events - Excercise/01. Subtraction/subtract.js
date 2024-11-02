function subtract() {
    const firstSum = Number(document.querySelector('#firstNumber').value)
    const secondSum = Number(document.querySelector('#secondNumber').value)

    const textbox = document.querySelector('#result')
    textbox.textContent = firstSum - secondSum;
}