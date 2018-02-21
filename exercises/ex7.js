// ---------- 1 ----------
// value type
// string, number, boolean, undefined, null
var a = 123;
var b = a; // b = new 123

a = 1; // 123 => 1

console.log(a);
console.log(b);

console.log(a === b);


// ---------- 2 ----------- 
// reference type
// [], {}, function, class, Map, Set, ....
var a = {
    name: {
        aaa: 'abcdef'
    }
};
var b = a; // b = reference { name: "Remember the milk" }

console.log(a);

console.log(b);

console.log(a === b);

