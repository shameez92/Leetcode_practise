const givenNumber = 121;
let reversedNumber=0;

function isPalindromeNumber(givenNumber){
    let intermediateNumber = givenNumber;
    while(intermediateNumber >= 1){
        let rem = intermediateNumber % 10;
        reversedNumber = reversedNumber * 10 + rem;
        intermediateNumber = parseInt(intermediateNumber/10);
    }
    if(givenNumber == reversedNumber) { return true; }
    else { return false; }
}

console.log(isPalindromeNumber(givenNumber));