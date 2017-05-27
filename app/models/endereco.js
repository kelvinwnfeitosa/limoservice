var mongoose = require('mongoose');

var schema = mongoose.Schema({
    cep           : {
        type     : String,
        required : true
    },
    logradouro    : {
        type     : String,
        required : true
    },
    numero        : {
        type     : String,
        required : true
    },
    complemento   : {
        type     : String,
        required : false
    },
    bairro        : {
        type     : String,
        required : true
    },
    cidade        : {
        type     : String,
        required : true
    },
    estado        : {
        type      : String,
        required  : true,
        uppercase : true
    }
});

mongoose.model('Endereco', schema);
