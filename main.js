/* Descrizione
Scrivere un programma che chieda all’utente:
1- Il numero di chilometri da percorrere
2- Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
3- il prezzo del biglietto è definito in base ai km (0.21 € al km)
4- va applicato uno sconto del 20% per i minorenni
5- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
Nota:
Rispettate l'ordine delle milestone, non passare alla seconda se la prima non é completa.
Se non vi sentite particolarmente creativi, questa (vedi screenshot) potrebbe essere un’implementazione da seguire per il secondo milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra. */

const userName = document.getElementById("user_name_input")
let userNameDisplay = document.getElementById("user_name")

const userInputKMs = document.getElementById("user_input_km")
let userTripLength = userInputKMs.value

const userSubmitAge = document.getElementById("user_input_age")
let userAge = userSubmitAge.value

const userWagon = document.getElementById("wagon")

const user_CP_code = document.getElementById("cp_code")

/**
 * Verifies if the User inputs are valid
 * @returns true or false
*/
let proceed = () => {
    if (userAge >= 0 && userAge <= 130 && userTripLength > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(proceed());

/* alert("ATTENZIONE! Inserire numeri validi") */

/**
 * Calculates a pondered price with correct display
 * @param {*} age price varies with age ranges
 * @param {*} KMs price depends on KMs
 * @returns the exact price for teh ticket
*/
function ticketPriceCalc(age, KMs) {
    let price = KMs * 0.21
    if (age < 18) {
        price *= 0.8
    } else if (age >= 65) {
        price *= 0.6
    }

    let humanNumbers;
    if (price < 10) {
        humanNumbers = '0' + price.toPrecision(2);
        return humanNumbers
    } else if (price >= 10 && price < 100) {
        humanNumbers = price.toPrecision(4)
        return humanNumbers
    } else if (price >= 100 && price < 1000) {
        humanNumbers = price.toPrecision(5)
        return humanNumbers
    } else if (price >= 1000 && price < 10000) {
        humanNumbers = price.toPrecision(6)
        return humanNumbers
    } else if (price >= 10000) {
        alert("ATTENZIONE! Non copriamo tratte così lunghe!")
        return
    }
}

function randWagon() {
    return Math.floor(Math.random() * 11) + 1;
}

function randCode() {
    return Math.floor(Math.random() * 99998) + 1;
}


const submit_btn = document.getElementById("generate")

submit_btn.addEventListener("click", function () {
    console.log(userName.value);
    console.log(userInputKMs.value);
    console.log(userSubmitAge.value);

    if (userName.value.length > 0) {
        document.getElementById("user_name").innerText = userName.value
    }

    if (proceed() === true) {
        const ticketPrice = ticketPriceCalc(userAge, userTripLength)
        const priceDisplay = document.getElementById("ticket_price_display")
        priceDisplay.innerText = ticketPrice + "€"
        console.log(ticketPrice);

        userWagon.innerText = randWagon();
        console.log(randWagon());

        user_CP_code.innerText = randCode()
        console.log(randCode());

    }
})



/* id="ticket_type" > age */

/*  id="erase" */

/* id="wagon"  > rand numb 1-12*/
/* id="cp_code" > rand numb 5 numbers 00000*/