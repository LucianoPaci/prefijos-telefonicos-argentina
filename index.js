const phoneNumbersData = require('./data')
const groupBy = require('./utils/groupBy')


module.exports = {
    /**
     * Utilidades
     */
    utils: {
        groupBy
    },
    /**
     * Devuelve un listado con toda la informacion
     */
    all: function() {
        return phoneNumbersData
    },

    /**
     * Filtra la lista de prefijos dependiendo de la propiedad que se le pase ('codigo' , 'provincia' , 'localidad' )
     * @param {*} property ('codigo' , 'provincia' , 'localidad' )
     * @param {*} value Valor del filtro
     */
    filter: function(property, value) {
        return phoneNumbersData.filter(data => data[property] === value)
    },

    /**
   * Buscar un prefijo telefónico a partir de una propiedad y devolver el primer resultado.
   * @param {String} property - La propiedad a ser usada en la busqueda ('codigo' , 'provincia' , 'localidad' )
   * @param {String} value - El valor para usar en el filtro
   */
    findOne: function (property, value) {
        return phoneNumbersData.find(data => data[property] === value)
    },


    /**
     * 
     * Retorna una array de localidades agrupados por provincia y el prefijo.
     * @param {string[]} prefixes - Un array de prefijos telefónicos
     */
    getLocalitiesByPrefixes: function (prefixes = []) {
        const filtered = []
        prefixes.forEach(prefix => {
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
    
        return final
    }
}