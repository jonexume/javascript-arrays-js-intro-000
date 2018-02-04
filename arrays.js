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

function removeElementFromBeginningOfArray(array) {
  array.slice();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {

  array.slice(-1);
  return array;
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array;
}
