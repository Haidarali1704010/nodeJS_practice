

const fs = require('fs');

module.exports ={
    createNewFile:(fileName) =>{
        const fd = fs.openSync(fileName,'w');
    },
    saveJsonToFile:(Obj,fileName) =>{
        const jsonString = JSON.stringify(Obj);
        fs.writeFile(fileName,jsonString,"utf-8",(err,data)=>{
            if(err) throw err;
            console.log(`Saved to file ${fileName}`);
        })
    },
    readJsonObjectFromFile:(fileName) =>{
        fs.readFile(fileName,(err,data)=>{
            if(err) throw err;
            let jsonObject = JSON.parse(data);
            console.log(`jsonObject.food =  ${JSON.stringify(jsonObject.food)}`);
            console.log(`jsonObject.resultCode =  ${JSON.stringify(jsonObject.resultCode)}`);
        })
    }


}