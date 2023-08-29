const range = (start, end, inc = 1) => {
    let array = [];

    for (let i = start; i <= end; i += inc) {
        array.push(i);
    }

    return array;
}

const sum = (arr) => {
    let total = 0;

    for (let num = 0; num < arr.length; num++) {
        total += arr[num];
    }

    return total;
}

const sumOfRange = (x, y) => {
    return sum(range(x,y));
}