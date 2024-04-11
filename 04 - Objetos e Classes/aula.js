
// Coleção dinâmica de chave e valor

const person = {
    name: 'Jéssica',
    age: 29,
    city: 'Recife',

    description: function(){
        console.log(`Meu nome é ${this.name} e minha idae é ${this.age}`);
    },
};

// Editável:
person.height = 1.60;
delete person.city;

/* person.description = function(){
    console.log(`Meu nome é ${this.name}`);
};
 */

/* console.log(person.name);
console.log(person.age); 
console.log(person);
 */


// Uma função dentro de um objeto, normalmente, chama-se método
// person.description();

console.log(person['age']);

// msm:
person['name'] = 'teste';
person.name = 'teste';