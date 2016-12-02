'use strict';

// Coin Exercise

// POJO
// Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.
function coinCounter(amount) {

  var coinPurse = {};

  if (amount >= .25) {
    coinPurse.quarters = Math.floor(amount / .25);
    amount = (amount - (coinPurse.quarters * .25));
  }

  if (amount >= .10) {
    coinPurse.dimes = Math.floor(amount / .10);
    amount = (amount - (coinPurse.dimes * .10));
  }

  if (amount >= .05) {
    coinPurse.nickels = Math.floor(amount / .05);
    amount = (amount - (coinPurse.nickels * .05)).toFixed(2);
  }

  if (amount > 0) {
    coinPurse.pennies = amount * 100;
  }

  return coinPurse;

};

// Run function
// console.log("Test text", coinCounter(.67));
// console.log("Test text", coinCounter(.25));
// console.log("Test text", coinCounter(.10));
// console.log("Test text", coinCounter(.05));
// console.log("Test text", coinCounter(.01));
