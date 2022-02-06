// performing a task
function greet(name, address)
{
    console.log('Hello ' + name + ' Do you live in ' + address);
}
// performing calculation

function calc(num)
{
   return num * num;
}

console.log(calc(2));


// constructer function

function Person(firstName, lastName, dob)
{
this.firstName= firstName;
this.lastName= lastName;
this.dob= new Date(dob);
this.fullName =function() {
    return ` ${this.firstName} ${this.lastName}`;

  }
}
Person.prototype.getBirthYear= function() {
    return this.dob.getFullYear(); 
  }
Person.prototype.fullName= function() {
    return this.dob.getFullYear(); 
  }

// instantiation of person object

const person1 = new Person('Shema', 'Jolivet', '07-22-1998')
const person2 = new Person('Jean', 'Jack', '2-5-2001')

console.log(person1)
console.log(person1.getBirthYear())
console.log(person1.fullName())