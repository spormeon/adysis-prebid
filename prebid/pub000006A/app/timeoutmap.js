//  TIMEOUT MAP - 1000 def brings back bigger bids in Uk
// for random number 100 to 2000 - Math.floor(Math.random() * n) * s + m - where n is 11, the number of expected values, s is 100, the "step" size between values, and m is 1000, the minimum value expected

var timeoutMap = {
0 : Math.floor(Math.random() * 11) * 100 + 1000,
1 : 1400,
2 : 1400,
3 : 1400,
4 : 1400,
5 : 1400,
6 : 1400,
7 : 2400,
8 : 1400,
9 : Math.floor(Math.random() * 11) * 100 + 1000,
10 : Math.floor(Math.random() * 11) * 100 + 1000,
11 : Math.floor(Math.random() * 11) * 100 + 1000,
12 : Math.floor(Math.random() * 11) * 100 + 1000,
13 : 1400,
14 : 1400,
15 : 1000,
16 : 800,
17 : 900,
18 : 1100,
19 : 1200,
20 : 1300,
21 : 2200,
22 : 1800,
23 : 1800
};
var t = new Date().getUTCHours();
PREBID_TIMEOUT = timeoutMap[t];
console.log("prebid timeout:", PREBID_TIMEOUT );