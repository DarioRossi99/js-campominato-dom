const buttonGriglia = document.getElementById("pulsanteGriglia");
let bombe;

buttonGriglia.addEventListener ("click", function () {

    generatoreGriglia(10);

    bombe = generatoreListaBombe(100);
    
});

/**
 * @param {number} numeroCelle 
 */

function generatoreGriglia(numeroCelle){

    const containerGriglia = document.querySelector(".grid-container");
    const celleTotali = numeroCelle * numeroCelle;

    for (let i = 1; i <= celleTotali; i++) {
        // containerGriglia.innerHTML += '<div class="grid-cell"></div>';
        // const cellaSelezionata = containerGriglia.querySelector(".grid—cell:last—child");
        // cellaSelezionata.addEventListener ("click")
        const cellaSelezionata = document.createElement("div");

        cellaSelezionata.classList.add("grid-cell");
        cellaSelezionata.dataset.cella = i 
        cellaSelezionata.style.flexBasis = 'calc(100% / ${numeroCelle})';
        cellaSelezionata.style.width = 'calc(100% / ${numeroCelle})';
        cellaSelezionata.dataset.generatoreGriglia = 1 + i;

        cellaSelezionata.addEventListener("click", selezionata);

        cellaSelezionata.addEventListener("click", function(){

            this.classList.toggle("bg-info");

            const cella = this.dataset.cella;

            console.log("hai cliccato il " + cella)
        })

        containerGriglia.append(cellaSelezionata);

    }

    
       
}

/**
 * 
 * @this {HTMLElement}
 */
function selezionata() {

    const generatoreGriglia = +this.dataset.cella;

    if ( listaBombe.includes( this.dataset.cella )){
        alert("Belin hai preso una mina");
    }

}

/**
 * 
 * @param {number} min 
 * @param {number} max 
 */
function generatoreNumeriRandom(min, max){
    return Math. floor( Math. random() * ( max - min + 1 ) ) + min;
}

const listaBombe = [];
/**
 * 
 * @param {number} celleTotali
 * @return {arrey} 
 */
function generatoreListaBombe( celleTotali ){


    while (listaBombe.length < 16) {
        const num = generatoreNumeriRandom(1, celleTotali);

        if(!listaBombe.includes(num)){
            listaBombe.push (num);
        }   
        
    }
    console.log(listaBombe)
}