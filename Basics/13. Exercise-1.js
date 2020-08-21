
/* 

*/

let a = document;

a = document.links

Array.from(a).forEach(element=>{
    if(element.href.includes("Forgot")){
        console.log('The Link is valid')
    }else
    console.log('Link is Invalid')
    
})

// a = document.images

// Array.from(a).forEach(element=>{
//     console.log(element)
// })