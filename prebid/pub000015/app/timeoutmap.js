//  TIMEOUT MAP - 1000 def brings back bigger bids in Uk
var timeoutMap = {
0 : 2000,
1 : 2000,
2 : 2000,
3 : 1600,
4 : 1600,
5 : 1600,
6 : 1400,
7 : 1400,
8 : 1400,
9 : 1400,
10 : 1400,
11 : 1400,
12 : 1600,
13 : 1600,
14 : 1600,
15 : 1600,
16 : 1600,
17 : 1600,
18 : 1600,
19 : 1600,
20 : 1600,
21 : 1600,
22 : 1600,
23 : 2000
};
var t = new Date().getUTCHours();
PREBID_TIMEOUT = timeoutMap[t];
console.log("prebid timeout:", PREBID_TIMEOUT );