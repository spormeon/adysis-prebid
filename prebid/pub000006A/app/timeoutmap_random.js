//  TIMEOUT MAP - 1000 def brings back bigger bids in Uk
// for random number 100 to 2000 - Math.floor(Math.random() * n) * s + m - where n is 11, the number of expected values, s is 100, the "step" size between values, and m is 1000, the minimum value expected
const MIN_RANDOM = 1000;
const MAX_RANDOM = 2000;
const RANDOM_STEP = 100;

function generateRandom(min, max, step) {
  const randomNum = min + Math.random() * (max - min);
  return Math.round(randomNum / step) * step;
}

function myRandom() {
  return generateRandom(MIN_RANDOM, MAX_RANDOM, RANDOM_STEP);
}
var timeoutMap = {
0 : myRandom(),
1 : myRandom(),
2 : myRandom(),
3 : myRandom(),
4 : myRandom(),
5 : myRandom(),
6 : myRandom(),
7 : myRandom(),
8 : myRandom(),
9 : myRandom(),
10 : myRandom(),
11 : myRandom(),
12 : myRandom(),
13 : myRandom(),
14 : myRandom(),
15 : myRandom(),
16 : myRandom(),
17 : myRandom(),
18 : myRandom(),
19 : myRandom(),
20 : myRandom(),
21 : myRandom(),
22 : myRandom(),
23 : myRandom()
};
var t = new Date().getUTCHours();
PREBID_TIMEOUT = timeoutMap[t];
console.log("prebid timeout:", PREBID_TIMEOUT );