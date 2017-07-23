/*jshint esversion: 6 */

var log = (name) => console.log(name);
log("=========Hello, world=======");

const fullname = (firstname, lastname) => firstname + " " + lastname;
const upper = (value) => value.toUpperCase();
console.log(upper(fullname("ming", "wang")));

const compose = (...functions) => (...args) => {
    let len = functions.length;
    let result = functions[--len].call(this, ...args);
    while (len > 0) {
        result = functions[--len].call(null, result);
    }
    return result;
};
console.log(compose(upper, fullname)("ming", "wang"));

















