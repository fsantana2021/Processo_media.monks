

//IMPORTA OS ARQUIVOS JSON
const data1 = require("./data/broken_database_1.json")
const data2 = require("./data/broken_database_2.json")
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
    //CRIA UM ELEMENTO MARCA_NOME NO BD1 BASEADO NO ID COM O NOME DA MARCA DO BD2
    for (const key in data1) {
        data1[key].id_marca_
        for (key2 in data2) {
            if (data1[key].id_marca_ === data2[key2].id_marca){
                data1[key].nome_marca = data2[key2].marca
    
            }
    
        }
    }



}

//EXPORTA O JSON USANDO fs
fs.writeFile("./broken_database_1_corrigid.json",JSON.stringify(data1),"utf-8", (error, resultado)=> {
    if (error) {
        console.log(error);
        return
    }

    console.log(resultado);
});


