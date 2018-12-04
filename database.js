const level = require('level');
const path ='./Transactios_Data'
let db = level(path,{valueEncoding:'json'});
