requirejs.config({
baseUrl: 'pub000002/lib',
paths: { app: '../app' }
});
// your application logic in there.
//require(["app/slotsonpage"], function (slotsonpage) {
require(["prebid2.40.0adyjs"], function (prebid) {
require(["gpt"], function (gpt) {
require(["bidfilter"], function (bidfilter) {
require(["app/timeoutmap"], function (timeoutmap) {
require(["app/floorpricemap"], function (floorpricemap) {
require(["app/siteconfig"], function (siteconfig) {
// require(["app/unrulyconfig"], function (unrulyconfig) {
// require(["app/amazonbidder"], function (amazonbidder) {
require(["app/bidcachemap"], function (bidcachemap) {
require(["app/assertiveconfig"], function (assertiveconfig) {
require(["app/nativebidders"], function (nativebidders) {
require(["app/outstreambidders"], function (outstreambidders) {
require(["app/bannerbidders"], function (bannerbidders) {
require(["app/adunitsconfig"], function (adunitsconfig) {
require(["app/custombuckets"], function (custombuckets) {
require(["app/prebidconfig"], function (prebidconfig) {
require(["app/assertivecustom"], function (assertivecustom) {
require(["assertive"], function (assertive) {
require(["preconnect"], function (preconnect) {	
//require(["app/addata"], function (preconnect) {	
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
//});
// });
// });
// });