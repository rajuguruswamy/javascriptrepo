const objects = [{ id: 'a' }, { id: 'c' }, { id: 'c' }, { id: 'd' },];

const foundIndex = objects.findIndex(function (item) {
    return item.id === 'x';
});

console.log(foundIndex);