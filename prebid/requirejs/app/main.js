define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    
    require('./slotsonpage');
    var prebid = require('prebid');
    var gpt = require('gpt');
    var preconnect = require('preconnect');
    var bidfilter = require('bidfilter');
    var timeoutmap = require('./timeoutmap');
    var floorpricemap = require('./floorpricemap');
    var siteconfig = require('./site-config');
    var unrulyconfig = require('./unruly-config');
    var amazonbidder = require('./amazon-bidder');
    var bidcachemap = require('./bidcachemap');
    var assertiveconfig = require('./assertiveconfig');
    var nativebidders = require('./native-bidders');
    var outstreambidders = require('./outstream-bidders');
    var bannerbidders = require('./banner-bidders');
    var adunitsconfig = require('./adunits-config');
    var custombuckets = require('./custombuckets');
    var startbids = require('./startbids');
    var biddersalias = require('./bidders-alias');
    var bidderssettings = require('./bidders-settings');
    var prebidconfig = require('./prebid-config');
    var requestbids = require('./requestbids');
    var GPTadunitconfig = require('./GPTadunit-config');
    var GPTsizemapping = require('./GPTsize-mapping');
    var assertivecustom = require('./assertive-custom');
    
    
    
    // Load library/vendor modules using
    // full IDs, like:
    
    
    var assertive = require('assertive');

    print(messages.getHello());
});