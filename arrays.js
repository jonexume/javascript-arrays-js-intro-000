// JavaScript Arrays

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
var myArrayAgain = [element, array[0]]
  return myArrayAgain;
}

function destructivelyAddElementToBeginningOfArray(array, element) {

  myArray.unshift(element);
  return myArray;
}

function addElementToEndOfArray() {
  chocolateBars.push("almondjoy");
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray() {
  var fruits = ["apples", "oranges", "bananas", "tomatoes"]
  fruits.push("tangerines")
  return fruits
}

function accessElementInArray() {

  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray() {

  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray() {
  chocolateBars.slice();
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray() {

  chocolateBars.slice(-1);
  return chocolateBars;
}

function removeElementFromEndOfArray() {
  chocolateBars.slice(0, chocolateBars.length -1);
  return chocolateBars;
}
