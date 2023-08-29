const countBs = str => {
    
    let BCounter = 0;
    
    for (let counter = 0; counter < str.length; counter++) {
        
        if(str[counter] === 'B') {
            BCounter++;
        }
    }

    console.log(BCounter);
}

const countChar = (str, letter) => {
    
    let letterCounter = 0;

    for (let counter = 0; counter < str.length; counter++) {
        if(str[counter] === letter) {
            letterCounter++;
        }
    }

    console.log(letterCounter);
}