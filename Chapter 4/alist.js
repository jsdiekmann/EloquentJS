
// Converts an array to a linked list (a linear data structure)
const arrayToList = arr => {
    let list = {};
    let newArray = [];
    for (let i=0; i < arr.length; i++) {
        newArray.unshift(arr[i]);
    };
    for (let i=0; i < newArray.length; i++) {
        list = {
            value: newArray[i],
            rest: {...list}
        }
    }
    return list;
};

// Converts a linked list to an array
const listToArray = list => {
    let arr = [];
    while(list.value) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
};

// Adds a new element to the front of a linked list
const prepend = (element, list) => {
    let arr = listToArray(list);
    arr.unshift(element);
    const newList = arrayToList(arr);
    return newList;
};

// Adds a new element to a specified index of a linked list
const nth = (index, list) => {
    const arr = listToArray(list);
    return arr[index];
};

// Adds a new element to a specified index of a linked list utilizing a recursive function
const nthRecursive = (index, list) => {
    let arr = listToArray(list);
    if(index===0) {
        return arr[0];
    } else {
    let newArr = arr.slice(1);
    list = arrayToList(newArr);
    return nthRecursive(index - 1, list);
    }
};