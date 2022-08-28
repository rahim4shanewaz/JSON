const arrayOfobj = [
    {
        name: 'soumik',
        age: 28,
        hometown: 'jhenidah',

    },
    {
        name: 'arkan',
        age: 25,
        hometown: 'paikpara',
        
    }
]
console.log(arrayOfobj);

const stringified = JSON.stringify(arrayOfobj);
console.log(stringified);
const objFied = JSON.parse(stringified);
console.log(objFied);
