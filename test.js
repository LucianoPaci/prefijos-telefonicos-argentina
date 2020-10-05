
const phoneNumbersData = require("./index")
console.log(phoneNumbersData.findOne('code', '291'))
console.log(phoneNumbersData.filter('code', '291'))
console.log(phoneNumbersData.utils.groupBy('province', phoneNumbersData.filter('province', 'Buenos Aires'), (eachOne) => eachOne.code ))
