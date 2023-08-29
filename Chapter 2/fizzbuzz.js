for(let counter=1; counter<=100; counter++) {
    let fizz = ''
    let buzz = ''
    let number = counter

    if(counter % 3 == 0) {
        fizz = 'Fizz';
        number = '';
    }

    if(counter % 5 == 0) {
        buzz = 'Buzz';
        number = '';
    }

    console.log(fizz+buzz+number);
}