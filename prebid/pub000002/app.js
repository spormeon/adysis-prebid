requirejs.config({
baseUrl: 'pub000002/lib',
paths: { app: '../app' }
});
// your application logic in there.
//require(["app/slotsonpage"], function (slotsonpage) {
require(["prebid2.40.0adyjs"], function (prebid) {
require(["gpt_min"], function (gpt) {
require(["bidfilter_min"], function (bidfilter) {
require(["app/timeoutmap_min"], function (timeoutmap) {
require(["app/floorpricemap_min"], function (floorpricemap) {
require(["app/siteconfig_min"], function (siteconfig) {
// require(["app/unrulyconfig"], function (unrulyconfig) {
//require(["app/amazonbidder"], function (amazonbidder) {
require(["app/bidcachemap_min"], function (bidcachemap) {
require(["app/assertiveconfig"], function (assertiveconfig) {
require(["app/nativebidders"], function (nativebidders) {
require(["app/outstreambidders"], function (outstreambidders) {
require(["app/bannerbidders"], function (bannerbidders) {
require(["app/adunitsconfig"], function (adunitsconfig) {
require(["app/custombuckets"], function (custombuckets) {
require(["app/prebidconfig_min"], function (prebidconfig) {
require(["app/assertivecustom_min"], function (assertivecustom) {
require(["assertive"], function (assertive) {
require(["preconnect_min"], function (preconnect) {	
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