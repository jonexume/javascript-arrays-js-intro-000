// JavaScript Arrays

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
var myArrayAgain = [element, array[0]]
  return myArrayAgain;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
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

function accessElementInArray(array, index) {

  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {

  array.shift();
  return array;
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
