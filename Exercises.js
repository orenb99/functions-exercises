//Question 1
function myReverse(str) {
  // your code here
  let final="";
  for(let i=str.length-1;i>=0;i--){
    final+=str.charAt(i);
  }
  return final;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here
  for (let i = 0; i < str.length; i++) {
      let temp="";
    for (let j = 0; j < str.length; j++) {
      if(i<=j){
        temp+=str.charAt(j);
        combinations.push(temp);
      }
    }
  }
  //
  return combinations;
}

//Question 3
function allCaps(str) {
  let final="";
  // your code here
  for(let i=0;i<str.length;i++){
    if(str.charAt(i-1)===" "||i===0){
      final+=str.charAt(i).toUpperCase();
    }
    else{
      final+=str.charAt(i);
    }
    
  }
  return final;
}

//Question 4
function myPower(x, n) {
  let final=1;
  for(let i=1;i<n;i++){
    final*=x;
  }
  return final;
}

//Question 5
function getFirstNotRepeating(str) {
  
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
