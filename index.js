//Object JS
/*
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function () {
      console.log('draw');
  }
};
*/

//Factory function
/*
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle2 = createCircle(1);

console.log(circle2.radius);

//Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);

Circle.call({}, 1);
Circle.apply({}, [1]);

*/
let number = {value: 10};

function increase (obj) {
    obj.value++;
}

increase(number);
console.log(number);
