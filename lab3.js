var a = 2;
var b = 'LOL';
var c = true;
var d = Symbol('foo');
var e = undefined;
var f = {a:1};
var g = function() {};
var h = 1n + 2n;
var i = a +=1; 
console.log(a, 'is', typeof a);
console.log(b, 'is', typeof b);
console.log(c, 'is', typeof c);
console.log(d, 'is', typeof d);
console.log(e, 'is', typeof e);
console.log(f, 'is', typeof f);
console.log(g, 'is', typeof g); // однорядковий
console.log(h, 'is', typeof h);     /*
                                    * багаторядковий
                                    * */
console.log(i);
const MATH_PI = 3.14;
const r = 10;

const res = MATH_PI === 3.14 && r >= 10
? MATH_PI * (2 * r)
: MATH_PI * (r * r);
console.log("result ", res);
console.log(a & i);