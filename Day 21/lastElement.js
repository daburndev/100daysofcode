// DEFINE YOUR FUNCTION BELOW:
function lastElement(arr){
    if(arr.length === 0){
        return null;
    } else{
        return arr[arr.length-1];
    }
    }
    
    lastElement([3,5,7]) //7
    lastElement([1]) //1
    lastElement([]) //null