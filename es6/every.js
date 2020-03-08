const hasPositiveNumbers = [1, 2, 3, 4, 5, 67, 7, 8, 9].every(function (item) {
    return item > 0;
});

console.log(hasPositiveNumbers);