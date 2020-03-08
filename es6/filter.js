const ints  =[1,2,3,4,5,6];

const evens  = ints.filter(function(item){
        return item % 2 ===0;
});
console.log(evens);