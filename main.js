//C is for Cookie
// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

// for (let x = 0; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

//Conjunction Function
// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log(conjoinedWord)
// }

// conjunction("Master", "Card")

//Mod Squad
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     };

//     let HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     ModSquad.members.forEach(member => {
//         HTMLRepresentation += `<div>${member}</div>`;
//     })


// document.querySelector(".show-info").innerHTML = HTMLRepresentation

//Simon Says
// const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]]

// for (let k = 0; k < locations.length; k++) {
//     let invalidLocation = false

//     if (k > 2) {
//         invalidLocation = true
//         if (invalidLocation == true) {
//             console.log("This location is invalid")
//         }
//     } else {
//         console.log(`There were ${k + 1} locations displayed`)
//     }
// }

//Lambda Llama
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"];
    let randomizer = Math.floor(Math.random() * 7);
    const suffix = " the Llama"

    let name = function () {
        let names = possibleNames[randomizer]
        return names
    }
    return name() + suffix;
}

nameMaker = llamaNamer();
console.log(nameMaker)


