console.log('JS OK');

// recupero gli elementi dal DOM

const playButton = document.getElementById('play-button');
const count = document.getElementById('countdown');
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
        randomField.textContent += randomNumber + ' ';
    }

    // Avvia il timeout di 30 secondi
    setTimeout(() => {

        // assegno la classe per far scomparire i random numbers
        randomField.classList.add('d-none');

        console.log('Timeout scaduto!');
    }, 30000);
});