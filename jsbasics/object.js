const course = [
    {
        id: 1,
        Name:'Mobile Application Developmnent',
        credite: 12,
        isComplite: true
    },
    {
        id: 1,
        Name:'Modeling and simulation',
        credite: 12,
        isComplite: true
    },
    {
        id: 1,
        Name:'Data mining',
        credite: 12,
        isComplite: false
    }
]

console.log(course)
console.log(course[1].Name)

// converting our object into JSON FORMAT
const courseJson = JSON.stringify(course)
console.log(courseJson)