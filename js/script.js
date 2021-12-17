/* 
Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/
const numbers = 5;
const randomNumbers = getRandomNumbers(numbersInGame);

//alert
randomNumbers.forEach((alertNumber) =>{
    alert(alertNumber)
})

//inizio gioco
setTimeout(start, 3000);

function start() {
    const userArray = [];
    const correctNumbers = [];
    const wrongNumbers = [];
    for (let i = 0; i < numbersInGame; i++) {
        const userNumbers = parseInt(prompt('Scrivi il numero che hai visto'));
        userArray.push(userNumbers);
    }
    console.log(userArray);
    userArray.forEach((alertNumber) => {
        if(randomNumbers.includes(alertNumber) && !correctNumbers.includes(alertNumber)){
            correctNumbers.push(alertNumber);
        } else{
            wrongNumbers.push(alertNumber);
        }
    })
    console.log(correctNumbers);
    console.log(wrongNumbers);
    if (!correctNumbers.length === 1) {
        alert(`I numeri che hai scritto, ${correctNumbers}, sono giusti! Ne hai indovinari ${correctNumbers.length}`)
    }else {
        alert(`I numeri che hai scritto, ${correctNumbers}, sono sbagliati! Ne hai indovinari ${correctNumbers.length}`)
    }
}

//funzione per numeri casuali
function getRndInteger() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//funzione array numeri casuali
function getRandomNumbers (numberOfItems){
    const numbersArray = [];
    while(numbersArray.length < numberOfItems){
        const newRandomNumber = getRndInteger (1, 100);
        console.log(newRandomNumber)
        if(!numbersArray.includes(newRandomNumber)){
            numbersArray.push(newRandomNumber)
        }
    }   
    return numbersArray;
}
