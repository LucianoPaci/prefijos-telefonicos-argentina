
const phoneNumbersData = require("./index")
console.log(phoneNumbersData.findOne('codigo', '291'))
console.log(phoneNumbersData.filter('codigo', '291'))
console.log(phoneNumbersData.utils.groupBy('provincia', phoneNumbersData.filter('provincia', 'Buenos Aires'), (eachOne) => eachOne.codigo ))
