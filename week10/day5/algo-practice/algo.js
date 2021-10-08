// Anagrams are words or phrases that contain the same number of characters.
//Create a function that checks a set of two strings.
//Returns 'true' if they are anagrams.
//Returns 'false' if they are not.

string1 = "A gentleman"
string2 = "Elegant man"
//expected result: true
function anagram (string1, string2){
    return string1.split("").sort().join("") === string2.split("").sort().join("")
}

string3 = "Clint Eastwood"
string4 = "Old West action"
//expected result: true
function anagram (string3, string4){
    return string3.split("").sort().join("") === string4.split("").sort().join("")
}

string5 = "idontlikealgos"
string6 = "algoverybad"
//expected result: false
function anagram (string5, string6){
    return string5.split("").sort().join("") === string6.split("").sort().join("")
}

// write a function that capitalizes the first character of every word in a string

phrase1 = "randy doesnt like giving algos"
phrase2 = "arent you glad its friday"
phrase3 = "i wonder whats for lunch today"
function capFirstLetter(phrase1, phrase2, phrase3) {
    return phrase1[0].toUpperCase() + phrase1.slice(1);
    return phrase2[0].toUpperCase() + phrase1.slice(1);
    return phrase3[0].toUpperCase() + phrase1.slice(1);
}
console.log(capFirstLetter(phrase1));
console.log(capFirstLetter(phrase2));
console.log(capFirstLetter(phrase3));


//Write a function that finds the missing number in a given integer array

let arr1 = [1,2,3,4,5,6,7,8,10];
let counter = 1;
for (let index = 0; index < arr1.length; index++){
    const element = arr1[index];
    if (element === counter) {
        counter++;
        continue;
    } else{
        return console.log(counter);
    }
}
console.log(missing);

//expect result: 9