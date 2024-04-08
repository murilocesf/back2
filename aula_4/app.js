//criar arquivos
const fs=require("fs")

//criar arquivos de log sincrono
let log='mensagem de log\n'

fs.writeFileSync('./logs.log', console.log);

console.log("fim");