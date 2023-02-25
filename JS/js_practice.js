//javascript practice

let name = "jordan"
let noVowels = name.replace(/[aeiou]/gi, '')
console.log(noVowels);

let username = "jordierwitt"
let password = "helloiamjordan"

function passwordCheck() {
    if (password.length < 10) {
        console.log("sorry, password not long enough");
    } else {
        console.log("great password");
    }
}
passwordCheck();
