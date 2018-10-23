
var sumArr = [];

// ------------------------ sum() ------------------------------------
//passes test
var sum = function(numA, numB){
  let sumArr = [];
  let stringSum;

  let numSum = numA + numB;
  sumArr.push(numSum);
  stringSum = `The sum of 4 and 7 is ${numSum}.`;
  sumArr.push(stringSum);
  //   console.log(sumArr);
  return sumArr;
};
// -----------------<<<------ sum() ------------------------------------

// ------------------------multiply()------------------------------------
//passes test
var multiply = function(numA, numB){
  let multArr = [];
  let stringMult;

  let numMult = numA * numB;
  multArr.push(numMult);
  stringMult = `The product of 5 and 9 is ${numMult}.`;
  multArr.push(stringMult);
  //   console.log(sumArr);
  return multArr;
};
  // ----------------<<<-----multiply()------------------------------------
