// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
    if(err){
        return console.log("error");
    }
    db.collection('testRecord').insertOne({
        name:"sameer",
        age:21
    },(err,result)=>{
        if(err){
            return console.log("error while inserting");
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })
    console.log("connected");
    db.close();
});
