const request = require('request');
const fs = require('fs');
const inputURL = process.argv.slice(2);

const dataRetreiver = function(callback) {
  request(inputURL[0], (error, response, body) => {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode);
    callback(body); 
    console.log(`Downloaded and saved ${response.length} bytes to ${inputURL[1]}`)
  });
}

const callbackFunc = function(body) {
  fs.writeFile(inputURL[1], body, err => { // in fs.writeFile syntax, the second argument is the content to write.
    if (err) {
      console.error(err)
      return
    }
  });
}

dataRetreiver(callbackFunc);