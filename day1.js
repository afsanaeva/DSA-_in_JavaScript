//Checking sum zero - Problem 1
// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [-4, 4] -> output
function getSumPairZero(array){
    for(i=0;i<=array.length;i++){
        for(j=i+1;j<array.length;j++){
        if(array[i]+array[j]===0){
            return[array[i],array[j]];
        }
        }
    }
    return null 
}
const result = getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);
