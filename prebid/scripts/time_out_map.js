//TIMEOUT MAP - 1000 def brings back bigger bids in Uk
var timeoutMap = {
0 : 1400,
1 : 1400,
2 : 1400,
3 : 1400,
4 : 1400,
5 : 1400,
6 : 1400,
7 : 1400,
8 : 1400,
9 : 1200,
10 : 1200,
11 : 1400,
12 : 1400,
13 : 1400,
14 : 1400,
15 : 1000,
16 : 1400,
17 : 1400,
18 : 1400,
19 : 1400,
20 : 1400,
21 : 1400,
22 : 1400,
23 : 1400
};
var t = new Date().getUTCHours();
PREBID_TIMEOUT = timeoutMap[t];
console.log("prebid timeout:", PREBID_TIMEOUT );