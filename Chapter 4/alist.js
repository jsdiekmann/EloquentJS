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


const listToArray = list => {
    let arr = [];
    while(list.value) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
};

const prepend = (element, list) => {
    let arr = listToArray(list);
    arr.unshift(element);
    const newList = arrayToList(arr);
    return newList;
};

const nth = (index, list) => {
    const arr = listToArray(list);
    return arr[index];
};

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