
/*
Element Selectors:
1. Single Element selectors 
2. Multi Element selectors
*/


/**************************************/
/* Ex.1: Single Element selectors */
/**************************************/

let element;

// element = document.getElementById('mkvnvprkbk')
// element.style.color='red';


// element = element.childNodes;
// for (let i = 0; i < element.length; i++) {
//     console.log(element[i]);
// }


// element = element.parentNode;
// console.log(element)


// element = document.getElementById('div1');
// element.innerText = '10 vishnu avataras';
// console.log(element.innerText)


// element = document.getElementById('a1');
// element.style.color='red';
// element.innerHTML = '<b>First Avatara is Matasya</b>';
// console.log(element.innerHTML)


// element = document.getElementsByTagName('h1')
// console.log(element[0]);
// // element[0].style.color='red';


/* querySelector */
// let sel = document.querySelector('#div1')
// console.log(sel)

// sel = document.querySelector('.child.red')
// sel.style.color = 'red';

// sel = document.querySelector('div')   // Selects the first div only
// console.log(sel)



/**************************************/
/* Ex. 2 : Multi Element selectors */
/**************************************/


let elements = document.getElementsByClassName('Dashavataras')  

// console.log(elements);
// console.log(elements[0]);
// console.log(elements[0].getElementsByClassName('avatar'))

// Print all elements of class Avatar
// Array.from(elements).forEach(function(ele){
//     console.log(ele)
// });

// Make all elements of class Avatar - Bold
elements = document.getElementsByClassName('avatar') 
Array.from(elements).forEach(eles=>{
    eles.style.color='red';
})