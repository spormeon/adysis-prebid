var usebidcacheMap = {
0 : true,			   
1 : false,
2 : true,
3 : false,
4 : true,
5 : false,
6 : true,
7 : false,
8 : true,
9 : false,
10 : true,
11 : false,
12 : true,
13 : false,
14 : true,
15 : false,
16 : true,
17 : false,
18 : true,
19 : false,
20 : true,
21 : false,
22 : true,
23 : false
};
var u = new Date().getUTCHours();
USERBIDCACHE = usebidcacheMap[u];
console.log("user bid cache:", USERBIDCACHE );