function loadData() {
    let dataElements = document.getElementById("storedData");
    let clearBtn = document.getElementById("clearBtn");
    
    if (!dataElements) {
        return
    }
    
    dataElements.innerHTML = "";
    let hasEntries = localStorage.length > 0;

    if (clearBtn) {
        if (hasEntries) {
            clearBtn.style.display = "block";
        } else {
            clearBtn.style.display = "none";
        }
    }

    if (!hasEntries) {
        dataElements.innerHTML = "<p>Bitte zuerst anmelden!</p>";
    }

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let value = localStorage.getItem(key)
        
        try {
            let dataObj = JSON.parse(value)
            let listItem = document.createElement("p")
            listItem.innerHTML = `
                <strong>Vorname:</strong> ${dataObj.firstname} <br>
                <strong>Nachname:</strong> ${dataObj.lastname} <br>
                <strong>Beruf:</strong> ${dataObj.work} <br>
                <strong>E-Mail:</strong> ${dataObj.email} <br>
                <strong>Telefonnummer:</strong> ${dataObj.telNumber} <br> <br>
            `
            dataElements.appendChild(listItem)
        } catch (error) {
            console.error("Fehler beim Parsen der Daten:", error)
        }
    }

    let allInfo = document.createElement("p");
    dataElements.appendChild(allInfo);
}

document.addEventListener("DOMContentLoaded", loadData)

function clearData() {
    localStorage.clear();
    location.reload();
}

clearBtn.addEventListener("click", clearData)