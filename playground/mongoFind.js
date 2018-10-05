// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
    if(err){
        return console.log("error");
    }
    db.collection('testRecord').find({name:'sameer'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log(err);
    })
    db.close();
});
