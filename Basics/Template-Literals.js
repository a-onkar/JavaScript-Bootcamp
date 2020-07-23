
// Template Literal with HTML
let name = 'Anand';
let work = 'AMCS';


let myHtml = `
<h1> Employee Info</h1>
<p> ${name} is working 
with ${work} </p> `;

document.body.innerHTML = myHtml;


// Template Literal with Array

const gods = ['Bramha', 'Vishnu', 'Mahesh']
const jyotirlinga = ['Somnath', 'Mallikarjuna','Nageshwar', 'Bhimashankar', 'Trimbakeshwar', 'Grishneshwar', 'Vaidyanath', 'Mahakaleshwar', 'Omkareshwar', 'Kashi Vishwanath', 'Kedarnath', 'Rameshwaram']


console.log(gods[2])
console.log(gods.length)


console.log(jyotirlinga.length)

console.log(`
Hindu mythology has 3 main gods viz. ${gods}.
${gods[0]} is said to be creator of universe
${gods[1]} represents ideal Human life
${gods[2]} is the most powerful god and has the power to destroy. ${gods[2]} is very well known as SHIVA

There are ${jyotirlinga.length} famous temple dedicated to Shiva : ${jyotirlinga}

`)

