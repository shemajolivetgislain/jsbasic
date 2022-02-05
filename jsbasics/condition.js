const age =18;
// teraniry operator

const ages = age > 21 ? 'your are adult': 'you are teen';

console.log(ages);


// switch case in JS

const season = 'sunny';

switch (season) {
    case 'sunny':
        console.log('the season we are in is sunny season')
        break;
    
    case 'rainny':
        console.log('the season we are in is rainny season')
        break;

    default:
        console.log('The season we are ')
        break;
}

let txt = "I can eat bananas all day";
/*
The slice() method returns a shallow copy of a portion of an array into a 
new array object selected from start to end (end not included) where start and 
end represent the index of tems in that array. The original array will not be modified.
*/
let x = txt.slice(10, 17);

console.log(x)