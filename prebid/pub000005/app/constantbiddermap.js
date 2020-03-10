//FLOOR_PRICE MAP - 1000 def brings back bigger bids in Uk
var constantbidderpriceMap = {
0 : 0.20,
1 : 0.21,
2 : 0.22,
3 : 0.23,
4 : 0.24,
5 : 0.25,
6 : 0.06,
7 : 0.07,
8 : 0.08,
9 : 0.06,
10 : 0.01,
11 : 0.01,
12 : 0.02,
13 : 0.03,
14 : 0.04,
15 : 0.05,
16 : 0.06,
17 : 0.07,
18 : 0.08,
19 : 0.09,
20 : 0.01,
21 : 0.01,
22 : 0.02,
23 : 0.03
};
var cbp = new Date().getUTCHours();
CONSTANT_BIDDER_PRICE = constantbidderpriceMap[cbp];
console.log("Constant Bidder price:", CONSTANT_BIDDER_PRICE );