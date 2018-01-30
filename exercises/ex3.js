var array = [
    "alice!", // 0
    "bob!",   // 1
    "john!",  // 2
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

function filter(fn, arr) {
    var newVar = [];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (fn(element)) {
            newVar.push(element);
        }
    }
    return newVar;
}
var result = filter(x => x.startsWith('a'), array);
console.log(result);
// to be or not to be, that is THE question
