console.log('HI, I am java and I am working fine');

//Creare una griglia 8x8
//Ogni volta che clicco su un quadrato questo si colora diversamente
// (e si decolora dopo il click)

// Selezionare il div del dom 

const gridContainer = document.getElementById('grid-container');

// Per ripetere un operazione 64 volte creiamo un ciclo FOR 

for (let i = 0; i < 64; i++) {

    //aggiungi nel div grid-container 64 volte un div class=cell
    // gridContainer.innerHTML += `<div class="cell"></div>`

    // oppure:

    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    gridContainer.append(newCell);
    //aggiungere un evento per il click

    newCell.addEventListener('click,', //quando clicco su newCell
    
    function() {
        console.log('Clicked:')
    }
    
    )
}

