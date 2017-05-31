var mongoose = require('mongoose');

var schema = mongoose.Schema({
    nome : {
        type     : String,
        required : true
    },
    sobrenome : {
        type     : String,
        required : true
    },
    data_nasc : {
        type     : Date,
        required : true
    },
    sexo : {
        type     : String,
        required : true,
        enum     : [
            'Masculino',
            'Feminino'
        ]
    },
    cpf : {
        type     : Number,
        required : true,
        unique   : true
    },
    rg : {
        type     : String,
        required : true
    },
    orgao_emissor : {
        type     : String,
        required : false
    },
    estado_orgao_emissor : {
        type      : String,
        required  : false,
        uppercase : true
    },
    estado_civil : {
        type     : String,
        required : true
    },
    profissao : {
        type     : String,
        required : true
    },
    nacionalidade : {
        type     : String,
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
                'Residencial',
                'Celular',
                'Comercial'
            ]
        }
    }]
});

mongoose.model('PessoaFisica', schema);
