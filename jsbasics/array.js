let colors = ['red','yellow','white'];
colors[3]= 'green';

// used for adding new item in array when your doesn't know your index value in your array
colors.push('grey')
// used for adding new item and putting to the first play
colors.unshift('blue')
// used for checking the index of item in array
console.log(colors.indexOf('yellow'));
console.log(colors);