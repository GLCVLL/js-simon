console.log('JS OK');

// recupero gli elementi dal DOM

const playButton = document.getElementById('play-button');
const count = document.getElementById('countdown');
const resultField = document.getElementById('result');
const randomField = document.getElementById('random-numbers');

let randomNumbers = []

// metto in ascolto il play button

playButton.addEventListener('click', () =>{
    // assegno la classe per far scomparire il button
    playButton.classList.add('d-none');
    
    // creo 5 numeri casuali e li stampo in pagina
    for(let i = 0; i < 5; i++){
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        randomNumbers.push(randomNumber);
        console.log(randomNumbers[i]);
        randomField.innerHTML += randomNumber + ' ';
    }

    // Avvia il timeout di 30 secondi
    setTimeout(() => {

        // assegno la classe per far scomparire i random numbers
        randomField.classList.add('d-none');
    }, 29500);

    setTimeout(() => {

        // creo un array per salvare i numeri inseriti dall'utente
        const userNumbers = [];

        // richiesta dei numeri all'utente tramite prompt
        for (let i = 0; i < 5; i++) {
           const userNumber = parseInt(prompt('Inserisci il numero ' + (i + 1)));
           userNumbers.push(userNumber);
        }

        // Controllo i numeri indovinati
        let correctlyGuessed = 0;
        for (let i = 0; i < 5; i++) {
            if (randomNumbers.includes(userNumbers[i])) {
            correctlyGuessed++;
            }
        }

        // Mostr0 il risultato
        resultField.textContent = `Hai indovinato ${correctlyGuessed} numeri.`;
    }, 30000);
});