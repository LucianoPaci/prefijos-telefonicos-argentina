
const fs = require("fs");
const phoneNumbersData = require("./index");
const startCase = require("lodash/startCase");

const result = phoneNumbersData.all().map((each) => {
  return {
    provincia: startCase(each.province),
    localidad: startCase(each.locality),
    codigo: each.code,
  };
});

fs.writeFile("cleanData.json", JSON.stringify(result), (err) => {
  if (err) {
    console.log("Err", err);
    throw err;
  }

  console.log("Done Writing!");
});
// console.log(phoneNumbersData.findOne('code', '291'))
// console.log(phoneNumbersData.filter('code', '291'))

// console.log(phoneNumbersData.utils.groupBy('province', phoneNumbersData.filter('province', 'Buenos Aires'), (eachOne) => eachOne.code ))
