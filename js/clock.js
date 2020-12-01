'use strict';

const time = document.querySelector('.clock__display');

function addZero(i) {           // ott ahol lehet 10-nél kisebb az érték, ott legyen 0 előtagja a számnak (01,05,09 stb)
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function dateForm() {
    const dateObject = new Date();
    const shortLongForm = `${addZero(dateObject.getHours())}:${addZero(dateObject.getMinutes())}:${addZero(dateObject.getSeconds())}`;       // a toLocaleDateString-nek a 2. paramétere egy objektum, és ennek van egy month objektuma, aminek lehet short vagy long propertyje
    time.textContent = shortLongForm;
}

setInterval(dateForm, 1000);            // másodpercenként frissíti így

