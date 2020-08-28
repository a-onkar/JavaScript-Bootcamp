/*

*/

let element = document.querySelector('.main.container')

console.log(element.childNodes)
console.log(element.children)
console.log(element.childElementCount)

console.log(element.childNodes[5].nodeName)

console.log(element.childNodes[5].nodeType)
/* Node types
1. Element
2. Attribute
3. Text Node
8. Comment
9. document
10. docType
*/

console.log(element.children[2].children[1].children[1].innerHTML)

console.log(element.firstChild)
console.log(element.firstElementChild)
console.log(element.firstElementChild.nextElementSibling)

console.log(element.lastChild)
console.log(element.lastElementChild)


