//DeleteMany
//FindOneAndDelete
//DeleteOne
const {MongoClient} = require('mongodb');
const ObjectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/test',(err,db)=>{
    if(err){
        return console.log("error");
    }
    // db.collection('testRecord').deleteMany({name:'neelam'}).then((msg)=>{

    // },(err)=>{

    // })
    // db.collection('testRecord').deleteOne({name:'neelam'}).then((msg)=>{

    // },(msg)=>{

    // })
    // db.collection('testRecord').findOneAndDelete({name:'neelam'}).then((msg)=>{
    //     console.log(msg);
    // })
    db.collection('testRecord').findOneAndDelete({
        _id: new ObjectID('5bb8e2d63699278157f9c976')
    }).then((msg)=>{
        console.log(msg);
    });
    db.close();
});
