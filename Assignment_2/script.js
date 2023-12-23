// Data Preparation
const persons = [
    { name: 'Namit', age: 19, city: 'Khategaon' },
    { name: 'Priti', age: 20, city: 'Indore' },
    { name: 'Prabal', age: 16, city: 'Dubai' },
    { name: 'Manish', age: 28, city: 'Dubai' }
];

// Filter
const filtereNames = persons.filter(person => person.age <= 25);

// Sorting
const sortedPersons = filtereNames.sort((a, b) => a.city.localeCompare(b.city));

// Console
console.log('Final list of persons:');
sortedPersons.forEach(person => {
    console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
});