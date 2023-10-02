// DEFINE YOUR FUNCTION BELOW:
function sumArray(nums){
    let total = 0;
    for(let num of nums){
        total+= num;
    }
    return total;
}

sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101