function isMultipleOfThreeAndFive(number){
    if(number%3 === 0 || number%5===0){
        return true
    }else{
        return false
    }
}

function findSumMultiplesThreeFiveSmallerThan(number){
    sum = 0
    for(let i=3; i<number; i++){
        if(isMultipleOfThreeAndFive(i)){
            sum += i
        }
    }
    return sum;
}

console.log(findSumMultiplesThreeFiveSmallerThan(1000));