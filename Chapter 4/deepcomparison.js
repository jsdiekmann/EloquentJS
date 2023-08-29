const deepEqual = (val1, val2) => {
    console.log(typeof val1);
    if(typeof val1==="object" && typeof val2==="object") {
        let keys1 = Object.keys(val1);
        let keys2 = Object.keys(val2);
        console.log(keys1);
        console.log(keys2);
        let values1 = Object.values(val1);
        let values2 = Object.values(val2);
        console.log(values1);
        console.log(values2);
        if (keys1 === keys2) {
            val1 = values1;
            val2 = values2;
        }
    }
    console.log(val2);

    return val1 === val2;
};