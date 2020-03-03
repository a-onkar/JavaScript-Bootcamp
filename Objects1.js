
// Advance Objects

/* In Object we can define variables, functions, & Objects.
  They should be defined in Key: Value pair format only.
*/

// Parent object
const findArea = {                          
  h: 10, b: 6, l: 20, r: 10,

// Child object / nested object  
  circle: {                               
    r: 5,
  },
// Child function / nested function
  AreaOfCircle() {                 
    let r = 10; 
    let cal_area = Math.PI * (r * r);
    console.log('Area of circle: '+cal_area)
  return cal_area;
  }
};


// Calling variables, functions and objects from parent object.

findArea.AreaOfCircle();

console.log(findArea.h)

console.log(findArea.circle.r)

console.log(findArea.AreaOfCircle())