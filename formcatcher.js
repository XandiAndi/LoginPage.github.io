// todo: Wenn auf den submitBtn geklickt wird
//       sollen die Formulardaten ausgelesen werden
// todo: Formulardaten sollen auch ausgelesen werden

let submitBtn = document.querySelector("#submitBtn")

function onSubmitBtnClick(event) {
    // preventDefault: Vermeiden des Standard Verhalten des Browsers
    // in diesem Fall: Seite wird vom Browser nicht neu geladen
    event.preventDefault();

    let firstname = document.querySelector("#firstname")
    let lastname = document.querySelector("#lastname")

    console.log(firstname.value, lastname.value)
}

function onSubmitGetFormData(event) {
    event.preventDefault()
    let formElement = document.querySelector("#nameForm")
    let formData = new FormData(formElement)

    // Kurzform
    // for (const [key, value] of formData) {
    // console.log(key, value)
    // }

    let formDataObj = {}

    // Langform
    for (const entry of formData.entries()) {
        let key = entry[0]
        let value = entry[1]
        console.log(key, value)
        formDataObj[key] = value
    }
    console.log(formDataObj)
    localStorage.setItem(localStorage.length, JSON.stringify(formDataObj))
}

submitBtn.addEventListener("click", onSubmitGetFormData)

// könnte man auch so machen
// document.getElementById("submitBtn")

// Daten wieder auslesen

function loadData() {
    let dataElements = document.getElementById("storedData");
    dataElements.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let value = localStorage.getItem(key)
        if (!value) continue

        let valueObj = JSON.parse(value)

        let item = document.createElement("li")

        item.textContent = `Vorname: ${valueObj.firstname}, Nachname: ${valueObj.lastname}, Beruf: ${valueObj.work}, Email: ${valueObj.email}, Telefonnummer: ${valueObj.telNumber}`

        dataElements.appendChild(item)
    }

    let allInfo = document.createElement("p");
    dataElements.appendChild(allInfo);
}

document.addEventListener("DOMContentLoaded", loadData)