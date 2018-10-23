
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
var sumOfFirst2;
var sumOfThird;
var sumOfAll;
var myArr;
var multOfFirst2;
var multOfThird;
var multOfAll;
var stringSum;
var stringMult;

// ------------------------sumAndMultiply()------------------------------------


sumAndMultiply = function(numA,numB,numC) {
  myArr = [];
  sumOfFirst2 = sum(numA,numB)[0];
  sumOfThird = sum(numC,0)[0];
  sumOfAll = sum(sumOfFirst2,sumOfThird)[0];
  myArr.push(sumOfAll);

  multOfFirst2 = multiply(numA,numB)[0];
  multOfThird = multiply(numC,1)[0];
  multOfAll = multiply(multOfFirst2,multOfThird)[0];
  myArr.push(multOfAll);

  stringSum = `${numA} and ${numB} and ${numC} sum to ${sumOfAll}.`;
  myArr.push(stringSum);

  stringMult = `The product of ${numA} and ${numB} and ${numC} is ${multOfAll}.`;
  myArr.push(stringMult);

  return myArr;
};