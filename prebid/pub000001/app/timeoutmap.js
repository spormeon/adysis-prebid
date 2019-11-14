//  TIMEOUT MAP - 1000 def brings back bigger bids in Uk
var timeoutMap = {
0 : 1400,
1 : 1400,
2 : 1400,
3 : 1400,
4 : 1400,
5 : 1400,
6 : 1400,
7 : 2400,
8 : 2800,
9 : 2000,
10 : 2000,
11 : 1800,
12 : 1800,
13 : 1400,
14 : 1400,
15 : 2200,
16 : 1800,
17 : 1800,
18 : 1800,
19 : 2200,
20 : 1800,
21 : 2200,
22 : 1800,
23 : 1800
};
var t = new Date().getUTCHours();
PREBID_TIMEOUT = timeoutMap[t];
console.log("prebid timeout:", PREBID_TIMEOUT );