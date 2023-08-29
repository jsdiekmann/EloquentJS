const reverseArray = arr => {
    let newArray = [];
    for (let i=0; i < arr.length; i++) {
        newArray.unshift(arr[i]);
    }
    return newArray;
}

const reverseArrayInPlace = arr => {
    let arrLength = arr.length;
    for (let i=1; i <= arrLength; i++) {
        const index = arrLength - i;
        arr.push(arr[index]);
    }
    return arr.slice(arr.length/2)
}