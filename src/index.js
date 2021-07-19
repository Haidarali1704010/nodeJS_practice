// let http = require("http");
// const { request } = require("https");
// const port  = 3001;
// const server = http.createServer((request,response)=>{
//     response.write("This is response for request !");
//     response.end();
// }).listen(port);
// console.log(`Server is running on port : ${port}`);


// console.log("Working With files...");
// var fileManager = require("./fileManager");
// const fileName = __dirname + "/../data/temp.txt";
// fileManager.createNewFile(fileName);

// let jsonObject = {
//     food:[{
//         fname:"chicken",
//         fprice:"200",
//     },
//     {
//         fname:"paneer",
//         fprice:"150"
//     }
// ],
// resultCode:200,
// restaurantName:"Taj Mahal"
// };

// fileManager.saveJsonToFile(jsonObject,fileName);
// fileManager.readJsonObjectFromFile(fileName);

const EventEmiiter = require("events");
class Customer extends EventEmiiter {
    constructor(name,gender){
        super();
        this.name = name;
        this.gender = gender;
    }
};
const mrJohn = new Customer("John","Male");
const msMary = new Customer("Marry","Female");

const callBackFunction = (foods, customer) => {
    for(let index in foods){
        console.log(`${customer.name} calls ${foods[index]}`);
    }
}

mrJohn.on("eventCallFoods",callBackFunction);
msMary.on("eventCallFoods",callBackFunction);

console.log("Do Something");
console.log("Do Task");

mrJohn.emit("eventCallFoods",["pizza","salad"],mrJohn);

console.log("Do Something");
console.log("Do something else");

msMary.emit("eventCallFoods",["nugget","paneer"],msMary);

