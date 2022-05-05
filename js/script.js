// stampare tutti i numri da 1 a 1
for (let i = 1 ; i <= 100; i++) {

    // console.log(i);

    // se multipli sia di 3 sia 5 stampare FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

    // se multipli di 5 stampare Buzz
    } else if (i % 5 === 0) {
        console.log("Buzz");
    
    
    // se multipli di 3 stampare fizz
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }

}
