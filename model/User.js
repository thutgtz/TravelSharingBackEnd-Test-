const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    id:{type: String,require : true},
    name:{type : String,require : true},
    email:{type : String,required : true,min : 6,max : 255 },
    date:{type : Date,default : Date.now},
    event:{
        invite:[{
            id:{type: String,require : true},
            routes:{type : Array,required : true},
            date:{type : String,required : true},
            src:{type : String,require : true},
            dst:{type : String,require : true},
            amount:{type : String,require : true}
        }],
        join:[{
            id:{type: String,require : true},
            routes:{type : Array,required : true},
            date:{type : String,required : true},
            src:{type : String,require : true},
            dst:{type : String,require : true},
            amount:{type : String,require : true}
        }]
    }
});

module.exports = mongoose.model('User',userSchema)