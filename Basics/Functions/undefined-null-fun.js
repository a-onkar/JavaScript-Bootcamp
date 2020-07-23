let var1 = 'Anand'
let var2

if(var1===undefined){
    console.log("Define the declared variable")
} else if(var2===undefined) {
    console.log('var2 is : '+var2)
}
else{
console.log('Value of declared variable '+var1)
}



let nullFun = function(var3){
    console.log('Printing: '+var3)
}

nullFun(null) //null
nullFun() //undefined