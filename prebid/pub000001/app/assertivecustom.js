assertive_custom_1 = USERBIDCACHE ? 'prebid_cache_enabled' : 'prebid_cache_disabled';
assertive_custom_2 = FLOOR_PRICE;
assertive_custom_3 = site_config.refresh_rate;
assertive_custom_4 = function (bidResponse) { return bidResponse.source; };
//console.log("Bid Source", bidResponse.source);

var source = client;
PREBID_SOURCE = source;
console.log("prebid source:", PREBID_SOURCE );
