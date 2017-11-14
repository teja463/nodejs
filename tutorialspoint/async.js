var fs = require("fs");

/* Blocking code example */

var data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log("Reading the file completed in blocking way\n\n");

/* Non-Blocking way */

fs.readFile("input.txt", function (err, data) {
    if (err) {
        console.log("error reading file" + err.code);
    }
    console.log(data.toString());
    console.log("Reading file completed in the callback");
});


console.log("Reading file completed in Non-blocking way");