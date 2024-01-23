

//IMPORTA OS ARQUIVOS JSON
const data1 = require("./db/broken_database_1.json")
const data2 = require("./db/broken_database_2.json")
const fs = require("fs")



//tira erro dos nomes do BD2
for (const key in data2) {
    
    data2[key].marca = data2[key].marca.replace(/æ/g,"a")
    data2[key].marca = data2[key].marca.replace(/ø/g,"o")
    
}

for (const key in data1) {
    //TIRA OS ERROS DE NOMES DO BD1
    data1[key].nome = data1[key].nome.replace(/æ/g,"a")
    data1[key].nome = data1[key].nome.replace(/ø/g,"o")
    //TIRA OS ERROS DE VENDAS DO BD1
    if (typeof(data1[key].vendas == "string")) {
        data1[key].vendas = parseInt(data1[key].vendas) 
    }
}

//EXPORTA O JSON USANDO fs
fs.writeFile("./src/db/broken_database_1_corrigid.json",JSON.stringify(data1),"utf-8", (erro)=> {
    if (erro) {
        console.log("ERRO ESCRITA DB 1");
    }
});
fs.writeFile("./src/db/broken_database_2_corrigid.json",JSON.stringify(data2),"utf-8", (erro)=> {
    if (erro) {
        console.log("ERRO ESCRITA DB 2");
    }
});


