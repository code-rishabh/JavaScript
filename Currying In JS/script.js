// function add(a){
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }


// const result = add(2)(3)(4);
// console.log(result);

const add = (a) => (b) => (c) => a+b+c;

console.log(add(2)(3)(4));


const sendEmailTo = (to) => (sub) => (body) => `Sending email to: ${to} with subject line ${sub} and the body is ${body}`;

// one way of returning this
const result = sendEmailTo("r08s2001@gmail.com")('test subject')('this is working perfectly fine')

console.log(result);

// another way of returning this
const step1 = sendEmailTo('r08s2001@gmail.com');
const step2 = step1('testing step1');

const finalStep = step2('testing step2');

console.log(finalStep);