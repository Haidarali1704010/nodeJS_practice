// let http = require("http");
// const { request } = require("https");
// const port  = 3001;
// const server = http.createServer((request,response)=>{
//     response.write("This is response for request !");
//     response.end();
// }).listen(port);
// console.log(`Server is running on port : ${port}`);


console.log("Working With files...");
var fileManager = require("./fileManager");
const fileName = __dirname + "/../data/temp.txt";
fileManager.createNewFile(fileName);

let jsonObject = {
    food:[{
        fname:"chicken",
        fprice:"200",
    },
    {
        fname:"paneer",
        fprice:"150"
    }
],
resultCode:200,
restaurantName:"Taj Mahal"
};

fileManager.saveJsonToFile(jsonObject,fileName);
fileManager.readJsonObjectFromFile(fileName);