const fs = require('fs');
function writeContentToFile(filePath, content){
    fs.appendFile(filePath, content, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved! perfectly");
    });
    //comment one 
    //comment two
}

exports.writeContentToFile = writeContentToFile
console.log("Last modification log");
