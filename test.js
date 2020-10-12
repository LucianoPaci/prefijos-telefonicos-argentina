
const phoneNumbersData = require("./index")
// console.log(phoneNumbersData.findOne('codigo', '291'))
// console.log(phoneNumbersData.filter('codigo', '291'))


// Obtener todos los prefijos de una provincia, ej: Buenos Aires
// const prefijosBuenosAires = phoneNumbersData.filter('provincia', 'Buenos Aires')

// console.log(phoneNumbersData.utils.groupBy('provincia', prefijosBuenosAires, (each) => each.codigo ))
const arrayOfPrefixes = ['343', '291', '11']

const filtered = []


arrayOfPrefixes.forEach(prefix => {
    let filteredByCode = phoneNumbersData.filter('codigo', prefix)
    if(filteredByCode.length) {
        filtered.push(phoneNumbersData.utils.groupBy('codigo', filteredByCode, each => ({ localidad: each.localidad, provincia: each.provincia})))
    }
    
});
const final = []

filtered.forEach((el) => {
    const key = Object.keys(el)[0]
    let orderedByProvince = phoneNumbersData.utils.groupBy('provincia', el[key], (each) => ({ localidad: each.localidad}))
    final.push({ [key]: orderedByProvince })
})

// const abv = phoneNumbersData.utils.groupBy('codigo', filtered, (each) => (each))
console.log('Final', JSON.stringify(final, null, 2))
// const ultraGroupBy = phoneNumbersData.utils.groupBy('codigo', abv, ( each )=> each)
// console.log(phoneNumbersData.utils.groupBy('codigo', abv['Santa Fe'], each => each.localidad))
// console.log('result', ultraGroupBy)

