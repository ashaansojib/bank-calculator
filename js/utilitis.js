function getInputElementById(inputFieldId) {
    const inputFieldValue = document.getElementById(inputFieldId);
    const getFieldValueString = inputFieldValue.value;
    const getFieldvalueNumber = parseFloat(getFieldValueString);
    inputFieldValue.value = '';
    if(isNaN(getFieldvalueNumber)){
        alert("wrong");
        return;
    }
    return getFieldvalueNumber;
}

// get the current element by id
function getCurrentElementById(currentElement) {
    const currentElementValue = document.getElementById(currentElement);
    const currentElementString = currentElementValue.innerText;
    const currentElementNumber = parseFloat(currentElementString);
    return currentElementNumber;
}
// set the current value in new value
function setElementById(showDeposit, newValue) {
    const setCurrentValue = document.getElementById(showDeposit);
    setCurrentValue.innerText = newValue;
}