

//Create a function that will return the area of a rectangle, square, triangle

let type = prompt('type, s / r / t ');
let land = parseInt(prompt('Input aria length'));
let land2 = parseInt(prompt('Input aria height'));

function aria(type, length, width) {
    if (type == 's') {
        return length * length;

    } else if (type == 'r') {
        return length * width;
    } else if (type == 't') {
        return .5 * length * width;
    }

    
}

console.log(`
 
height     : ${land};

width      : ${land2}
--------------------------
aria of traignle = ${aria('t', land, land2)};



`);


