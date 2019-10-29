define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');
    var slotsonpage = require('./slotsonpage');
    var timeoutmap = require('./timeoutmap');
    var floorpricemap = require('./floorpricemap');
    var bidcachemap = require('./bidcachemap');
    var assertiveconfig = require('./assertiveconfig');
    var nativebidders = require('./native-bidders');
    var outstreambidders = require('./outstream-bidders');
    var bannerbidders = require('./banner-bidders');
    var adunitsconfig = require('./adunits-config');
    var custombuckets = require('./customebuckets');
    var biddersalias = require('./bidders-alias');
    var bidderssettings = require('./bidders-settings');
    var prebidconfig = require('./prebid-config');
    var GPTadunitconfig = require('./GPTadunit-config');
    var GPTsizemapping = require('./GPTsize-mapping');
    var assertivecustom = require('./assertive-custom');
    
    
    
    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');
    var prebid = require('prebid');
    var gpt = require('gpt');
    var preconnect = require('preconnect');
    var bidfilter = require('bidfilter');
    var assertive = require('assertive');

    print(messages.getHello());
});