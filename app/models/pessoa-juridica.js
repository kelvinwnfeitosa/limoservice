var mongoose = require('mongoose');

var schema = mongoose.Schema({
    razao_social : {
        type     : String,
        required : true
    },
    cnpj : {
        type     : String,
        required : true,
        unique   : true
    },
    representante : {
        type     : mongoose.Schema.Types.ObjectId,
        ref      : 'PessoaFisica',
        required : true
    }, 
    telefones : [{
        ddd : {
            type     : Number,
            required : true
        },
        numero : {
            type     : Number,
            required : true
        },
        tipo : {
            type     : Number,
            required : true,
            enum     : [
                'Celular',
                'Comercial'
            ]
        }
    }]
});

mongoose.model('PessoaJuridica', schema);
