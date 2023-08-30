for(let counter=1; counter<=100; counter++) {
    let fizz = ''
    let buzz = ''
    let number = counter

    // Activates the string "Fizz" and sets numbers divisble by 3 to an empty string
        if(counter % 3 == 0) {
        fizz = 'Fizz';
        number = '';
    }

    // Activates the string "Buzz" and sets numbers divisble by 5 to an empty string
    if(counter % 5 == 0) {
        buzz = 'Buzz';
        number = '';
    }

    console.log(fizz+buzz+number);
}