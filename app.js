
var ArrforSum = [];

// ------------------------ sum() ------------------------------------
//passes test
var sum = function(numA, numB){
  let ArrforSum = [];
  let stringSum;

  let numSum = numA + numB;
  ArrforSum.push(numSum);
  stringSum = `The sum of 4 and 7 is ${numSum}.`;
  ArrforSum.push(stringSum);
  //   console.log(ArrforSum);
  return ArrforSum;
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

var testArray = [2, 3, 4];
var accumulator = 0;

// var sumArray = function (myArr){
//   for (var i = 0; i < myArr.length; i ++){
//     accumulator = sum(accumulator,myArr[i])[0];
//     console.log(accumulator);
//   }
//   return accumulator;
// };

// sumArray(testArray);

//working

var needToGet ='2,3,4 was passed in as an array of numbers, and 9 is their sum.';

var sumArray = function (myArr){
  var arrReturn = [];
  // let counter = 0;
  //   for (var i = 0; i <myArr.length; i++){
  var firstTwo = sum(myArr[0],myArr[1])[0];
  console.log(firstTwo, 'first two');
  var secondTwo = sum(myArr[2],0)[0];
  var allTogetherNow = sum(firstTwo,secondTwo)[0];
  console.log(allTogetherNow, 'alltogethernow');
  //   }
  arrReturn.push(allTogetherNow);
  arrReturn.push(`${myArr[0]},${myArr[1]},${myArr[2]} was passed in as an array of numbers, and ${allTogetherNow} is their sum.`);
  console.log(arrReturn);  
  return arrReturn;

};

var getThis = 'The numbers 2,3,4 have a product of 24.';
let holder = [];

var multiplyArray = function(myArr){
  var accumulator = 1;
  for (var i = 0; i < testArray.length; i ++){
    accumulator = multiply(accumulator, myArr[i])[0];
  }
  holder.push(accumulator);
  holder.push(`The numbers ${myArr[0]},${myArr[1]},${myArr[2]} have a product of ${accumulator}.`);
  console.log(holder);
  return holder;
};

