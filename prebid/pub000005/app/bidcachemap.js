var usebidcacheMap = {
0 : false,			   
1 : false,
2 : false,
3 : false,
4 : false,
5 : false,
6 : false,
7 : false,
8 : false,
9 : false,
10 : false,
11 : false,
12 : false,
13 : false,
14 : false,
15 : false,
16 : false,
17 : false,
18 : false,
19 : false,
20 : false,
21 : false,
22 : false,
23 : false
};
var u = new Date().getUTCHours();
USERBIDCACHE = usebidcacheMap[u];
console.log("user bid cache:", USERBIDCACHE );