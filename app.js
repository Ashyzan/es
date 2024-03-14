// console.log('funziona');

for ( let i = 0; i < 100; i++ ) {
//console.log(i+1)
    let num = i + 1

    const resto5 = num % 5
    const resto3 = num % 3
   // const multipli53 = num % 3*5
    //console.log(num)

    if (resto5 === 0 && resto3 === 0) {

        console.log('FizzBuzz' , num)
    }

    else if (resto5 === 0) {
        console.log ('Buzz', num)
    }

    else if (resto3 === 0) {
        console.log ('Fizz' , num)
    }

    else {
        console.log(num) ;
    }

}