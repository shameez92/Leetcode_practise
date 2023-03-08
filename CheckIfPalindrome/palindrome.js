const givenNumber = 121211;
let reversedNumber=0;

function isPalindromeNumber(givenNumber){

    if(givenNumber < 0) return false;

    let intermediateNumber = givenNumber;
    while(intermediateNumber >= 1){
        let rem = intermediateNumber % 10;
        reversedNumber = reversedNumber * 10 + rem;
        intermediateNumber = parseInt(intermediateNumber/10);
    }
    return givenNumber === reversedNumber;
}

console.log(isPalindromeNumber(givenNumber));