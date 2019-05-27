const fs = require('fs');
function writeContentToFile(filePath, content){
    fs.appendFile(filePath, content, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

exports.writeContentToFile = writeContentToFile
