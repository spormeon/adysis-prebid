//FLOOR_PRICE MAP - 1000 def brings back bigger bids in Uk
var floorpriceMap = {
0 : 0.00,
1 : 0.00,
2 : 0.00,
3 : 0.00,
4 : 0.00,
5 : 0.00,
6 : 0.00,
7 : 0.00,
8 : 0.00,
9 : 0.00,
10 : 0.00,
11 : 0.00,
12 : 0.00,
13 : 0.00,
14 : 0.00,
15 : 0.00,
16 : 0.00,
17 : 0.00,
18 : 0.00,
19 : 0.00,
20 : 0.00,
21 : 0.00,
22 : 0.00,
23 : 0.00
};
var f = new Date().getUTCHours();
FLOOR_PRICE = floorpriceMap[f];
console.log("floor price:", FLOOR_PRICE );