var fs = require('fs')
var readline = require("readline")

var lineNoAry = []

var filePath = "/home/Documents/lastPrReviewer/lineList"
var patt = new RegExp("^[\\w]+\\.[\\w]")
var separator = ","

function parseLineList(filepathFile){

    var lineReader = readline.createInterface({
        input: fs.createReadStream(filepathFile)
      })
      lineReader.on('line', function(data){
        var res = patt.test(data)
        if(!res){
          var lineAndOffsetPair = data.split(separator)
          if(lineAndOffsetPair.length < 2){
            lineAndOffsetPair.push(0)
          }
          generateLineNoToBeChecked(parseInt(lineAndOffsetPair[0]), parseInt(lineAndOffsetPair[1]))
        }
      });
      lineReader.on('close', function(){
        console.log(lineNoAry)
      })
}

function generateLineNoToBeChecked(lineNo, offset){
  console.log(lineNo+"------"+offset)
  if(offset == 0){
    lineNoAry.push(lineNo)
  }
  else{
    while(offset > 0){
      offset = offset-1
      lineNoAry.push(lineNo + offset)
    }
  }
  return lineNoAry
}
parseLineList(filePath)
//Added new comment
//generate the user ids
