var array = ['shema','john','jolivet']

for (let index = 0; index < array.length; index++) {
    const element = array[index].length;
    if (element == 4) {
        console.log(array[index])
    }
}



let obj={
    a:"Hi",
    b:20
};
let a="b"
console.log(obj[a]);
console.log(obj["a"])