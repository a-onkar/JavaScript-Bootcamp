function AreaOfCircle(radius) {

    return {      // returning objects
        radius,
        cal_circle_area() {
            cal_area = Math.PI * (radius ** 2);
            console.log('Area of circle: ' + cal_area);
            return cal_area;
        }
    }

}


// Calling variables, functions and objects from parent object.

let c1 = AreaOfCircle(10); // Area of circle with radius = 10
console.log(c1.cal_circle_area());

c1.cal_circle_area();


AreaOfCircle(5).cal_circle_area() // Area of circle with radius = 5



