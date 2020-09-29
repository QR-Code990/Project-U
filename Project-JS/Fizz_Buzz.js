var output = [];

function fizzBuzz() {

  for(var count = 1; count < 101; count++;){ //iterate make the for loop many many times
  if (count % 3 === 0 && count % 5 ===0){
    output.push("fizzBuzz");
  }
  else if (count % 3 === 0) {
    output.put("Fizz");
  }
  else if (count % 5 === 0){
     output.push("Buzz");
  }
  else{
    output.push(count);
  }

}
console.log(output);
}
