var mongoose = require('mongoose');

var schema = mongoose.Schema({
    login : {
        type     : String,
        required : true,
        unique   : true
    },
    senha : {
        type     : String,
        required : true
    },
    admin : {
        type    : Boolean,
        default : false
    }
}, {
    versionKey : false
});

mongoose.model('Usuario', schema);
