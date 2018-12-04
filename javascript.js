// Fibonacci's FizzBuzz
// 1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.
// 2.) You must replace numbers in the sequence divisible by 3 with Fizz, by 5 with Buzz, and by both 3 and 5 with FizzBuzz.
var fibsFizzBuzz = function(n) {
    var a = 1, b = 0, temp;
    let myArray = [];
    while (n > 0){
      temp = a;
      a = a + b;
      b = temp;
      n--;
      myArray.push(b);
    }
  for(let i = 0; i < myArray.length; i++){
    if((myArray[i] % 3 === 0) && (myArray[i] % 5 === 0)){
      myArray[i] = "FizzBuzz";
    }
    if(myArray[i] % 3 === 0){
      myArray[i] = "Fizz";
    }
    if(myArray[i] % 5 === 0){
      myArray[i] = "Buzz";
    }
  }
  return myArray;
}
