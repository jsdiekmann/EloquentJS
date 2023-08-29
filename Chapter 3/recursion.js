const isEven = num => {
    if(num === 0) {
        return 'even';
    } else if(num === 1) {
        return 'odd';
    } else {
        return isEven(num - 2);
    }
}