 

// constructer function

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
        }
    
    getBirthYear() {
        return this.dob.getFullYear();
    }
    fullName() {
        return this.dob.getFullYear(); 
      } 
}


// instantiation of person object

const person1 = new Person('Shema', 'Jolivet', '07-22-1998')
const person2 = new Person('Jean', 'Jack', '2-5-2001')

console.log(person1)
console.log(person1.getBirthYear())
console.log(person1.fullName())