// impressionViewable, slotRenderEnded or slotOnload or impressionViewable is best to use yet
var lazyloadstyleMap = {
0 : slotOnload,			   
1 : slotOnload,
2 : slotOnload,
3 : slotOnload,
4 : slotOnload,
5 : slotOnload,
6 : slotOnload,
7 : slotOnload,
8 : slotOnload,
9 : slotOnload,
10 : slotOnload,
11 : slotOnload,
12 : slotOnload,
13 : slotOnload,
14 : slotOnload,
15 : slotOnload,
16 : slotOnload,
17 : slotOnload,
18 : slotOnload,
19 : slotOnload,
20 : slotOnload,
21 : slotOnload,
22 : slotOnload,
23 : slotOnload
};
var lls = new Date().getUTCHours();
LAZYLOADSTYLE = lazyloadstyleMap[lls];
console.log("Lazy Load Style:", LAZYLOADSTYLE );