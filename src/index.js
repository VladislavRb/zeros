module.exports = function zeros(expression) {

  function numberOfTwos(num){
    let twosNumber = 0;
    while(num / 2 == ~~(num / 2)){
      twosNumber++;
      num /= 2;
    }
    return twosNumber;
  }

  function numberOfFives(num){
    let fivesNumber = 0;
    while(num / 5 == ~~(num / 5)){
      fivesNumber++;
      num /= 5;
    }
    return fivesNumber;
  }

  function numberOfTwosInFactorial(num){
    let res = 0;
    for(let i = 1; i <= num; i++){
      res += numberOfTwos(i);
    }
    return res;
  }

  function numberOfFivesInFactorial(num, doubleFact){
    let res = 0;
    if(doubleFact){
      if(num % 2){
        for(let i = 5; i <= num; i += 10){
          res += numberOfFives(i);
        }
      }
      else{
        for(let i = 10; i <= num; i += 10){
          res += numberOfFives(i);
        }
      }
    }
    else{
      for(let i = 1; i <= num; i++){
        res += numberOfFives(i);
      }
    }
    return res;
  }

  let exprs = expression.split("*");
  let fives = 0;
  let twos = 0;
  for(let factorial of exprs){
    if(factorial[factorial.length - 2] == "!"){
      let num = +factorial.replace("!!", "");
      fives += numberOfFivesInFactorial(num, true);
      if(!(num % 2)){
        twos += numberOfTwosInFactorial(num);
      }
    }
    else{
      let num = +factorial.replace("!", "");
      fives += numberOfFivesInFactorial(num, false);
      twos += numberOfTwosInFactorial(num);
    }
  }
  return fives > twos ? twos : fives;
}
