var testResult = main();

console.log("Result:", testResult);

function fac(num) {
    // return (num === 1) ? 1 : num * fac(num - 1);
    if (num === 1) {
        return 1;
    } else {
        return num * fac(num - 1);
    }
}


function main() {
    var result = main();
    return result;
}
