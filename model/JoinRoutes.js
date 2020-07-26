const mongoose = require('mongoose');
const JoinRoutesSchema = new mongoose.Schema({
    id:{
        type: String,
        require : true
    },
    routes:{
        type : Array,
        required : true
    },
    date:{
        type : String,
        required : true
    },
    src:{
        type : String,
        require : true
    },
    dst:{
        type : String,
        require : true
    },
    amount:{
        type : String,
        require : true
    }
});

module.exports = mongoose.model('JoinRoutes',JoinRoutesSchema);