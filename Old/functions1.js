
/* Functions are used to define tasks which are to be used repeatatively. 
Define the task in a function once and invoke (call) it number of time you want it. 
Returns: Whenever a function returns something, we need to hold it in a variable and then use it 
(Ex. printing the returned value.)
 */


/*Example 1 */

// function add(a,b){
//     console.log(a+b)
// }

// add(20,20)
// add(80,20)

/*Example 2 */

// function add(x,y) {
//     return x+y;
// }


/*Example 3 */

// function Greetings(){
//     console.log("Hey! There, just chillout")
// }

// Greetings()


/*Example 4 */

//  function Greetings() {

//     return ( "Hey There! I m not using WhatsApp")
//  }

// let msg = Greetings()
// console.log(msg)


// Example 5: Function can access outer variable

// let toolName = 'Cypress';

// function tool() {

// toolName = 'cy';    
//     let displayTool = 'The automation tool used for UI e2e automation is: ' + toolName;
//     console.log(displayTool);
// }

// tool();


// Call inner and outer vaiable

// let name = 'Anand';

// function callName(){
//     let name = 'Supriya';
//     let z = 'Hey!..' + name;
//     console.log(z);
// }

// callName();
// console.log(name)

// function showMsg(from, text){
//     console.log(from + ' : ' + text)
// }
// showMsg('Cypress')
// showMsg('Cypress', 'Learn it..!')


// function advFun(test, cy = cyTest()){

//     console.log(test)
   
//     cyTest();
// }

// advFun('Anand', )



// function showMsg(fname, lname){
//     return fname + lname;
// }

// let msg = showMsg('Anand', ' Onkar');
// console.log(msg)


let age = prompt('Whats your age? ', 10);
