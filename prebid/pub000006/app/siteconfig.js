var site_config = {
refresh_rate: PREBID_TIMEOUT*30,         // denoted in milliseonds 40secs=40000...
FAILSAFE_TIMEOUT: PREBID_TIMEOUT*2,      // denoted in milliseonds 5secs=5000...
LAZYLOAD_FETCH: 20,                      // Fetch slots within X viewports
LAZYLOAD_RENDER: 15,                     // Render slots within X viewports.
LAZYLOAD_MOBILE_SCALE: 1.3               // Scale the above values on mobile.
};
// site_config end
console.log('Lazy Load Fetch = ' +site_config.LAZYLOAD_FETCH );
console.log('Lazy Load Render = ' +site_config.LAZYLOAD_RENDER );
console.log('Lazy Load Mobile Scale = ' +site_config.LAZYLOAD_MOBILE_SCALE );

