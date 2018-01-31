var array = [
    "alice!", // 0
    "bob!", // 1
    "john!", // 2
    "martin!", // 3
    "donald duck!", // 4
    "alexander!" // 5
];

var i = -2;
var sum = 1;
for (;;) {
    if (i >= 3) {
        break;
    }

    sum = sum * i;

    i++;
}
console.log(sum);

for (var i = 0; i < 6; i = i + 2) {
    var element = array[i];
    console.log(element);
}
// var array = [ "alice", "bob", "john","martin","donald duck","alexander"];
function filter(fn, arr) {
    var newVar = [];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (fn(element) === true) {
            newVar.push(element);
        }
    }
    return newVar;
}

var result = filter(x => x.startsWith("a"), array);
console.log(result);

// var array = [ "alice", "bob", "john","martin","donald duck","alexander"];
function map(fn, arr) {
    var newVar = [];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        newVar.push(fn(element));
    }
    return newVar;
}

var result2 = map(x => {
    if (x.startsWith('a')) {
        return x + '!!!'
    } else {
        return x;
    }
}, array);
console.log(result2);
// to be or not to be, that is THE 


// var array = [ "alice", "bob", "john","martin","donald duck","alexander"];
function some(fn, arr) {
    var newVar = false;
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (fn(element) === true) {
            newVar = true;
            break;
        }
    }
    return newVar;
}
        array.some(x => x.startsWith("a"))
var result3 = some(x => x.startsWith("a"), array);

// var array = [ "alice", "bob", "john","martin","donald duck","alexander"];
function NOSOROG(fn, arr) {
    var newVar = true;
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (fn(element) === false) {
            newVar = false;
        }
    }
    return newVar;
}

var result4 = NOSOROG(x => x.length > 3, array);

console.log(result4);
