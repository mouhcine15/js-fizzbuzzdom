// stampare tutti i numri da 1 a 1

const squares = document.querySelector (".quadrato");
for (let i = 1 ; i <= 100; i++) {
    let element;
    // console.log(i);

    // se multipli sia di 3 sia 5 stampare FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        element = `<div class="quadrato red ${i}"> ${"BuzzFizz"}</div>`;


    // se multipli di 5 stampare Buzz
    } else if (i % 5 === 0) {
        console.log("Buzz");
        element = `<div class="quadrato yellow ${i}"> ${"Buzz"}</div>`;
    
    
    // se multipli di 3 stampare fizz
    } else if (i % 3 === 0) {
        console.log("Fizz");
        element = `<div class="quadrato green ${i}"> ${"Fizz"}</div>`;

    } else {
        console.log(i);
        element = `<div class="quadrato blue ${i}"> ${i}</div>`;
    }
    squares.innerHTML += element;
}
