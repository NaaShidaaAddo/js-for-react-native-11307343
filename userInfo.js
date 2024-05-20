const { processArray, formatArrayStrings } = require('./arrayManipulation');


//formattedArrayStrings is the strings array formatted by formatArrayStrings
function createUserProfiles(names, formattedArrayStrings) {
    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: formattedArrayStrings[index],
            id: index + 1
        };
    });
}


const stringArray = ["Ama", "Sena", "Whitfield", "Seana", "Dokdo"];
const formattedArrayStrings = ["ama", "SENA", "whitfield", "SEANA", "dokdo"];

const userProfiles = createUserProfiles(stringArray, formattedArrayStrings);
console.log(userProfiles); 

