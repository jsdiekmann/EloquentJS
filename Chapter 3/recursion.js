const isEven = num => {
    
    //Handles negative numbers (makes them positive)
    if(num<0) {
        num = num * (-1);
    }
    
    //Recursive function to determine if a positive integer is odd or even
    if(num === 0) {
        return 'even';
    } else if(num === 1) {
        return 'odd';
    } else {
        return isEven(num - 2);
    }
}