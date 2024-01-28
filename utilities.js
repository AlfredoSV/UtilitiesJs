/*  Developer : Alfredo Sanchez Verduzco 
	GitHub: (AlfredoSv)(https://github.com/AlfredoSV)
	Versión 0.0.2
	Date of last modification: : 8/23/2023 - 8:53 a.m

*/

/*Functions for validation of string (min,max, undifined and required)*/

function validateStr(idValue, spanMessageIdValue, messageValue, min, max, printInDom, showMessageDefault = true) {

	let formInputs = {

		inputName: {
			id: idValue,
			spanMessageId: spanMessageIdValue,
			message: !showMessageDefault ? messageValue : "El string tiene que ser menor a " + max + "carácteres y menor a" + min + "carácteres"
		}

	}

	let isValid = validateString(max, min, document.getElementById(formInputs.inputName.id).value);

	if (!printInDom)
		return isValid;

	if (isValid)
		hideMessageValidation(formInputs.inputName.id, formInputs.inputName.spanMessageId);
	else
		showMessageValidation(formInputs.inputName.id, formInputs.inputName.spanMessageId, formInputs.inputName.message);

	return isValid;
}

function validateString(max, min, str) {

	return !(str == undefined || str.trim() == ''
		|| str.length > max || str.length < min);

}

/*Functions for validation of string (min,max, undifined and required)*/

/*Functions for validation of date (dateMin, dateMaX, undifined and required)*/

function validateDate(idValue, spanMessageIdValue, messageValue, printInDom, isOnlyRequired) {

	let formInputs = {

		inputName: {
			id: idValue,
			spanMessageId: spanMessageIdValue,
			message: messageValue
		}

	}

	let isValid = false

	if (isOnlyRequired)
		isValid = validateDateRequired(document.getElementById(formInputs.inputName.id).value);
	else
		isValid = validateDateAndRange(document.getElementById(formInputs.inputName.id).value);

	if (!printInDom)
		return isValid;

	if (isValid)
		hideMessageValidation(formInputs.inputName.id, formInputs.inputName.spanMessageId);
	else
		showMessageValidation(formInputs.inputName.id, formInputs.inputName.spanMessageId, formInputs.inputName.message);

	return isValid;
}

function validateDateRequired(dateP) {

	return !(dateP == undefined || dateP.trim() == '');
}

function validateDateAndRange(dateP) {

	return !(dateP == undefined || dateP.trim() == '');
}

/*Functions for validation of date (dateMin, dateMaX, undifined and required)*/


function showMessageValidation(idInput, id, message) {

	let spanMessage = document.querySelector("#" + id);
	let inputValue = document.querySelector("#" + idInput);
	spanMessage.innerHTML = message;
	spanMessage.style.color = "red";
	spanMessage.style.marginTop = "7px";
	inputValue.style.border = "solid red 1.5px";
}

function hideMessageValidation(idInput, id) {

	let inputValue = document.querySelector("#" + idInput);
	let spanMessage = document.querySelector("#" + id);
	spanMessage.innerHTML = "";
	inputValue.style.border = "";
}


/*Set opntions on select element*/
function setOptionsSelect(idSelect, list, valueKey, textKey, viewOptionDefault) {
	const areaSele = document.getElementById(idSelect);
	if (viewOptionDefault) {
		let newOptionDefault = document.createElement('option');
		newOptionDefault.value = "0";
		newOptionDefault.text = "Select a option";
		areaSele.add(newOptionDefault);
	}
	list.forEach((elem) => {
		let newOption = document.createElement('option');
		newOption.value = elem[valueKey];
		newOption.text = elem[textKey];
		areaSele.add(newOption);
		newOption = undefined;
	});
}


/*Function of validate the value on select*/
function validateSelect(idValue, spanMessageIdValue, messageValue, printInDom) {

	let formInputs = {

		inputName: {
			id: idValue,
			spanMessageId: spanMessageIdValue,
			message: messageValue
		}

	}

	let isValid = false;

	let select = document.querySelector("#" + idValue);
	isValid = select.value !== "0";

	if (!printInDom)
		return isValid;

	if (isValid)
		hideMessageValidation(formInputs.inputName.id, formInputs.inputName.spanMessageId);
	else
		showMessageValidation(formInputs.inputName.id, formInputs.inputName.spanMessageId, formInputs.inputName.message);

	return isValid;
}

/*Function of validate the value integer*/
function validateIntegerNumber(idValue, spanMessageIdValue, messageValue, printInDom) {

	let formInputs = {

		inputName: {
			id: idValue,
			spanMessageId: spanMessageIdValue,
			message: messageValue
		}

	}

	let isValid = false;

	let str = document.querySelector("#" + idValue);
	isValid = /^\d*$/.test(str.value);

	if (str.value === '')
		isValid = false;

	if (!printInDom)
		return isValid;

	if (isValid)
		hideMessageValidation(formInputs.inputName.id, formInputs.inputName.spanMessageId);
	else
		showMessageValidation(formInputs.inputName.id, formInputs.inputName.spanMessageId, formInputs.inputName.message);

	return isValid;
}

/*Function of validate the value floating*/
function validateFloatingNumber(idValue, spanMessageIdValue, messageValue, printInDom) {

	let formInputs = {

		inputName: {
			id: idValue,
			spanMessageId: spanMessageIdValue,
			message: messageValue
		}

	}

	let isValid = false;

	let str = document.querySelector("#" + idValue);
	isValid = /^[+-]?([0-9]*[.])?[0-9]+$/.test(str.value);

	if (str.value === '')
		isValid = false;

	if (!printInDom)
		return isValid;

	if (isValid)
		hideMessageValidation(formInputs.inputName.id, formInputs.inputName.spanMessageId);
	else
		showMessageValidation(formInputs.inputName.id, formInputs.inputName.spanMessageId, formInputs.inputName.message);

	return isValid;
}
