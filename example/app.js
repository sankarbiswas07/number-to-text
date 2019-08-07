let http = require('http');
let number = require('../src');

http.createServer(function (req, res) {

     res.writeHead(200, {'Content-Type': 'application/json'});

     res.end(

        "number.toWord(12201, \"en-in\") = "+ JSON.stringify(number.toWord(12201, "en-in"))+"\n\n"+
        "number.toWord(200, \"en-in\") = "+ JSON.stringify(number.toWord(200, "en-in"))+"\n\n"+
        "number.toWord(2000, \"en-in\") = "+ JSON.stringify(number.toWord(2000, "en-in"))+"\n\n"+
        "number.toWord(21010, \"en-in\") = "+ JSON.stringify(number.toWord(21010, "en-in"))+"\n\n"+
        "number.toWord(123456767890, \"en-in\") = "+ JSON.stringify(number.toWord(123456767190, "en-in"))+"\n\n\n"+

        "number.toWord(123456767890, \"hin-in\") = "+ JSON.stringify(number.toWord(123456767890, "hin-in"))+"\n\n\n"+

        "number.toWord(123456767890, \"ben-in\") = "+ JSON.stringify(number.toWord(123456767890, "ben-in"))+"\n\n\n"+

        "number.toWord(12201, \"gu-in\") = "+ JSON.stringify(number.toWord(12201, "gu-in"))+"\n\n"+
        "number.toWord(200, \"gu-in\") = "+ JSON.stringify(number.toWord(200, "gu-in"))+"\n\n"+
        "number.toWord(2000, \"gu-in\") = "+ JSON.stringify(number.toWord(2000, "gu-in"))+"\n\n"+
        "number.toWord(21010, \"gu-in\") = "+ JSON.stringify(number.toWord(21010, "gu-in"))+"\n\n"+
        "number.toWord(123456767890, \"gu-in\") = "+ JSON.stringify(number.toWord(123456767190, "gu-in"))+"\n\n\n"+

        "number.toWord(12201, \"ur-in\") = "+ JSON.stringify(number.toWord(12201, "ur-in"))+"\n\n"+
        "number.toWord(200, \"ur-in\") = "+ JSON.stringify(number.toWord(200, "ur-in"))+"\n\n"+
        "number.toWord(2000, \"ur-in\") = "+ JSON.stringify(number.toWord(2000, "ur-in"))+"\n\n"+
        "number.toWord(21010, \"ur-in\") = "+ JSON.stringify(number.toWord(21010, "ur-in"))+"\n\n"+
        "number.toWord(123456767890, \"ur-in\") = "+ JSON.stringify(number.toWord(123456767190, "ur-in"))+"\n\n\n"+

        "number.toWord(12201, \"ta-in\") = "+ JSON.stringify(number.toWord(12201, "ta-in"))+"\n\n"+
        "number.toWord(200, \"ta-in\") = "+ JSON.stringify(number.toWord(200, "ta-in"))+"\n\n"+
        "number.toWord(2000, \"ta-in\") = "+ JSON.stringify(number.toWord(2000, "ta-in"))+"\n\n"+
        "number.toWord(21010, \"ta-in\") = "+ JSON.stringify(number.toWord(21010, "ta-in"))+"\n\n"+
        "number.toWord(123456767890, \"ta-in\") = "+ JSON.stringify(number.toWord(123456767190, "ta-in"))+"\n\n\n"+

        "number.toWord(12201, \"te-in\") = "+ JSON.stringify(number.toWord(12201, "te-in"))+"\n\n"+
        "number.toWord(200, \"te-in\") = "+ JSON.stringify(number.toWord(200, "te-in"))+"\n\n"+
        "number.toWord(2000, \"te-in\") = "+ JSON.stringify(number.toWord(2000, "te-in"))+"\n\n"+
        "number.toWord(21010, \"te-in\") = "+ JSON.stringify(number.toWord(21010, "te-in"))+"\n\n"+
        "number.toWord(123456767890, \"te-in\") = "+ JSON.stringify(number.toWord(123456767190, "te-in"))+"\n\n\n"
     )
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');

