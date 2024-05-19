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


//newArray is the array of numbers processed by processArray
function formatArrayStrings(strings, newArray){
    return strings.map((str, index) => {
        const number = newArray[index];
        if (number % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

const stringArray = ["Hello", "World", "JavaScript", "is", "Fun"];
const formattedArrayStrings = formatArrayStrings(stringArray, newArray);
console.log(formattedArrayStrings); 

