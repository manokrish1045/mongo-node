// fs - file system
const fs = require("fs")
// const quote = "dfiuvnfg fuheuf urvhbuif uifbiuryge iuyge uy"

// fs.writeFile('./awesome1.html', quote, (err) => {
//     console.log("Completed writing")
// })
// const quote2 = "dfiuvnfg fuheuf urvhbuif uifbiuryge iuyge uy";

// fs.writeFile("./backup/text-1.html", quote2, (err) => {
//     console.log("Completed writing")
// })
// node file.js
// const quote2 = "dfiuvnfg fuheuf urvhbuif uifbiuryge iuyge uy";
// const [, , noofFiles] = process.argv
// for (let i = 1; i < noofFiles; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//         console.log("Completed writing")
//     })
// }


// fs.readFile('./col.txt', "utf-8", (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data);
//     }
// })

// const quote3 = "bmw"

// fs.appendFile('./awesome1.html', '\n' + quote3, (err) => {
//     console.log('updates')
// })

fs.unlink('./dummy.txt', (err => {
    console.log('deleted')
}))