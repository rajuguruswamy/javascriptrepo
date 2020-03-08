const  ints  = [1,2,3,4,5,6,7,8];
const sum  = ints.reduce(function(result,item){
    return result + item;
},0);
console.log(sum);