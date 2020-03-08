const objects = [{ id: 'a' }, { id: 'a' }, { id: 'c' }, { id: 'd' },];

const found  = objects.find(function(item){
    return  item.id === 'c';
});

console.log(found);