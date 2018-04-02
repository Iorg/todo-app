function sum(a , b) {
    return a + b;
}

function product(a , b) {
    return a * b;
}

test('should sum of two numbers', function() {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 2)).toBe(1);
});

test('should product of two numbers', function() {
    expect(product(1, 2)).toBe(2);
    expect(product(-1, 2)).toBe(-2);
})
