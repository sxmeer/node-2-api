//DeleteMany
//FindOneAndDelete
//DeleteOne
const {MongoClient, ObjectID} = require('mongodb');
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
    db.collection('testRecord').findOneAndUpdate({
        _id : new ObjectID('5bb79dace4d64e154436d88a')
    },{
        $set:{
            name:'sameeeer'
        },
        $inc:{
            age:5
        }
    },{
        returnOriginal:false
    }).then((msg)=>{
        console.log(msg);
    });
    db.close();
});
