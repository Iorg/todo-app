// Hi there

var testArray = ['The Sopranos', 'Game of Thrones', 'Breaking Bad', 'The Walking Dead', 'Rome', 'Lost', 'Spartacus: Blood and Sand'];

function test(array) {

    var unitedElement = array[0];
    for (var i = 1; i < array.length; i++) {
        var element = array[i];

        unitedElement = unitedElement + "; " + element;
      
    }

    return unitedElement;
}

// Calculate sum of length of elements of the array.

var result = test(testArray);

console.log(result);