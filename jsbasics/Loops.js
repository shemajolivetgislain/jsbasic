const course = [
    {
        id: 1,
        Name:'Mobile Application Developmnent',
        credite: 12,
        isComplite: true
    },
    {
        id: 2,
        Name:'Modeling and simulation',
        credite: 6,
        isComplite: true
    },
    {
        id: 3,
        Name:'Data mining',
        credite: 8,
        isComplite: false
    }
]
// 1st to for loop in array
for (let i = 0; i < course.length; i++) {
    const element = course[i];
    console.log(element.Name)
}

// 2nd to for loop in array
for (let subject of course) {
    console.log(subject.Name);
}

// 3rd using for each way

course.forEach(function subject(sub) {
    console.log(sub.id)
    
})

// 4th method using map method

listCourse = course.map(function(subject) {
    return subject.credite
})
console.log(listCourse)


// 5th way using filter method
const listcredite = course.filter(function(subject) {
    return subject.credite == 12;
}).map(function (sub) {
    return sub.Name;
})
console.log(listcredite)
console.log(listCourse)