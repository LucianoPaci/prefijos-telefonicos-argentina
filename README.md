# Listado de prefijos telefónicos para Argentina

---

## Instalación

```bash
npm i prefijos-telefonicos-argentina
```

## Uso

- _groupBy_

```javascript
// Obtener todos los prefijos de una provincia, ej: Buenos Aires
const buenosAiresData = phoneNumbersData.filter("provincia", "Buenos Aires");

const prefijosBuenosAires = phoneNumbersData.utils.groupBy(
  "provincia",
  buenosAiresData,
  (each) => each.codigo
);
```

##### Resultado

```javascript
{
  'Buenos Aires': [
    '2317', '2924', '2345', '2392', '2317', '221',  '2271',
    '2477', '2983', '236',  '236',  '2346', '2225', '2226',
    '2927', '3329', '2223', '2344', '11',   '3388', '2337',
    '2227', '2983', '2316', '2355', '2927', '2478', '2353',
    '2923', '2477', '2353', '2221', '2296', '2325', '2281',
    '291',  '236',  '2932', '2266', '2921', '3388', '3329',
    '223',  '223',  '237',  '223',  '221',  '223',  '2226',
    '221',  '223',  '2355', '2395', '3327', '2346', '2292',
    '2925', '2392', '3388', '2314', '2929', '2924', '2342',
    '2323', '291',  '2281', '2395', '3489', '336',  '3382',
    '2226', '2323', '2478', '2475', '2936', '2254', '2227',
    '2395', '2323', '2317', '2357', '2274', '2357', '2273',
    '2929', '2245', '2324', '2344', '2352', '2241', '291',
    '2396', '2281', '2346', '2264', '2982', '2473', '223',
    '2357', '2291',
    ...
  ]
}
```

- findOne

```javascript
// Obtener el dato de alguna localidad con el prefijo 291
const data = phoneNumbersData.findOne("codigo", "291");
```

##### Resultado

```javascript
{ provincia: 'Buenos Aires', localidad: 'Bahia Blanca', codigo: '291' }
```

- filter

```javascript
// Obtener los datos de las localidades con el prefijo 291
const data = phoneNumbersData.filter("codigo", "291");
```

##### Resultado

```javascript
[
  {
    provincia: 'Buenos Aires',
    localidad: 'Bahia Blanca',
    codigo: '291'
  },
  { provincia: 'Buenos Aires', localidad: 'Cabildo', codigo: '291' },
  { provincia: 'Buenos Aires', localidad: 'Chasico', codigo: '291' },
  {
    provincia: 'Buenos Aires',
    localidad: 'Mayor Buratovich',
    codigo: '291'
  },
  { provincia: 'Buenos Aires', localidad: 'Nueva Roma', codigo: '291' },
  {
    provincia: 'Buenos Aires',
    localidad: 'Paraje Sauce Chico',
    codigo: '291'
  },
  {
    provincia: 'Buenos Aires',
    localidad: 'Saldungaray',
    codigo: '291'
  },
  {
    provincia: 'Buenos Aires',
    localidad: 'Sierra De La Ventana',
    codigo: '291'
  },
  {
    provincia: 'Buenos Aires',
    localidad: 'Teniente Origone',
    codigo: '291'
  },
  { provincia: 'Buenos Aires', localidad: 'Tornquist', codigo: '291' },
  {
    provincia: 'Buenos Aires',
    localidad: 'Villa Ventana',
    codigo: '291'
  }
]
```
