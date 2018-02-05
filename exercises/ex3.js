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
    if (x.startsWith("a")) {
        return x + "!!!";
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
array.some(x => x.startsWith("a"));
var result3 = some(x => x.startsWith("a"), array);

// var array = [ "alice", "bob", "john","martin","donald duck","alexander"];
function every(fn, arr) {
    var newVar = true;
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (fn(element) === false) {
            newVar = false;
        }
    }
    return newVar;
}

var result4 = every(x => x.length > 3, array);

console.log(result4);

// var array = [ "alice", "bob", "john", "martin", "donald duck", "alexander", "xxx"];
function find(fn, arr) {
    var newVar = null;
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (fn(element) === true) {
            newVar = element;
            break;
        }
    }
    return newVar;
}
array.find(x => x.length === 3);
var result5 = find(x => x.length === 3, array);

console.log(result5);
// var array = [ "alice", "bob", "john", "martin", "donald duck", "alexander", "xxx"];
function findLast(fn, arr) {
    var newVar = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        var element = arr[i];
        if (fn(element) === true) {
            newVar = element;
            break;
        }
    }
    return newVar;
}
var result7 = findLast(x => x.length === 3, array);

console.log(result7);

// var array = [ "alice", "bob", "john", "martin", "donald duck", "alexander", "xxx"];
function reverce(arr) {
    var newVar = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        var element = arr[i];
        newVar.push(element);
    }
    return newVar;
}
var result7 = reverce(array);

console.log(result7);

// var array = [ "alice", "bob", "john", "martin", "donald duck", "alexander", "xxx"];
function concat(arr, newArr) {
    var newVar = [];
    for (var i = 0; i <= arr.length; i++) {
        var element = arr[i];
        newVar.push(element);
    }
    for (var i = 0; i <= newArr.length; i++) {
        var element = newArr[i];
        newVar.push(element);
    }
    return newVar;
}
array.concat(["dilan", "marijke", "saimon", "mila"]);
var result8 = concat(array, ["dilan", "marijke", "saimon", "mila"]);

console.log(result8);

// var array = [ "alice", "bob", "john", "martin", "donald duck", "alexander", "xxx"];
function zip(arr, newArr) {
    var newVar = [];
    var length = arr.length < newArr.length ? arr.length : newArr.length;

    var length1;
    if (arr.length > newArr.length) {
        length1 = arr.length;
    } else {
        length1 = newArr.length;
    }

    length === length1; // true

    for (var i = 0; i < length1; i++) {
        var element1 = arr[i];
        var element2 = newArr[i];
        newVar.push([element1, element2]);
    }
    return newVar;
}
var result10 = zip(array, ["dilan", "marijke", "saimon", "mila"]);
console.log(result10);

// var array = [ "bob", "john", "alice"];
function aaaaa(arr) {
    var newArr = arr.slice();

    for (var i = 0; i < newArr.length; i++) {
        for (var j = i + 1; j < newArr.length; j++) {
            if (newArr[i] > newArr[j]) {
                var tmp = newArr[i]; 
                newArr[i] = newArr[j];
                newArr[j] = tmp;
            }
        }
    }
    return newArr;
}
// i = 0, j = 1, ["bob", "john", "alice"] => ["john", "bob", "alice"]
// i = 0, j = 2, ["john", "bob", "alice"] => ["alice", "bob", "john"]
// i = 1, j = 2, ["alice", "bob", "john"] => ["alice", "john", "bob"]
// i = 2, j = 3, ["alice", "bob", "john"] => ["alice", "john", "bob"]


var result10 = aaaaa(["bob", "john", "alice", "abcd"]);
console.log(result10);
