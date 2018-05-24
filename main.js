// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]


// for (let x = 0; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log(conjoinedWord)
// }

// conjunction("Master", "Card")


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

const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]]

for (let k = 0; k < locations.length; k++) {
    let invalidLocation = false

    if (k > 2) {
        invalidLocation = true
        if (invalidLocation == true) {
            console.log("This location is invalid")
        }
    } else {
        console.log(`There were ${k + 1} locations displayed`)
    }
}


