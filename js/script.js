console.log('JS OK');

// recupero gli elementi dal DOM

const playButton = document.getElementById('play-button');
const count = document.getElementById('countdown');
const randomField = document.getElementById('random-numbers');


// metto in ascolto il play button

playButton.addEventListener('click', () =>{
    // assegno la classe per far scomparire il button
    playButton.classList.add('d-none');
    
    // creo 5 numeri casuali e li stampo in pagina
    for(let i = 0; i < 5; i++){
        const randomNumbers = parseInt(Math.floor(Math.random() * 100) + 1);
        const numberText = document.createTextNode(randomNumbers + ' ');
        randomField.appendChild(numberText);
    }
});