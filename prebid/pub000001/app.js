// For any third party dependencies, like jQuery, place them in the lib folder.
// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'pub000001/lib',
    paths: {
        app: '../app'
    }
});
// Start loading the main app file. Put all of
// your application logic in there.
//require(["app/slotsonpage"], function (slotsonpage) {
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
require(["prebid"], function (prebid) {
require(["gpt"], function (gpt) {
require(["assertive"], function (assertive) {
require(["bidfilter"], function (bidfilter) {
// require(["preconnect"], function (preconnect) {
console.log('all deps loaded in order');
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
// });
// });
// });
// });