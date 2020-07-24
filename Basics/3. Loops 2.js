

let arr = [5,12,4,8,54,44]

arr.forEach((element)=>{
    console.log(element)
})


let arr1 = [234.234,34,23,67,57,867,2,34]

arr1.forEach((element, index, array)=>{
console.log(`The element ${element}, is present at ${index} index in Array: ${array} `)

})





let person = {
    name: 'Andy',
    profession: 'MF',
    location: 'Europe',
    posting: 'Ireland'
}

for(let key in person){
    console.log(`The ${key} of object is -> ${person[key]}`)
}