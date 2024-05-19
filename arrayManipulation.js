function processArray(arrayofnum) {
    return arrayofnum.map(num => {
        if (num % 2 == 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

const enteredArray = [1, 2, 3, 4, 5];
const newArray = processArray(enteredArray);
console.log(newArray);


