// ASSERTIVE ANALYTICS SETTINGS - Version: 1.4.0
var assertive_entityId = 'eE88aE2HtwKnXikcL';
var assertive_debug = 0; // append the query string 'assertiveYield=debug' or add this local storage entry 'localStorage.setItem("assertiveYield", "debug")' to enable dynamically
var assertive_sampleRate = 1; // 1 = 100%, 0.2 = 20%...

var assertive_timeout = null;
var assertive_layout = null;
var assertive_userState = null;

// example of supplying a custom var from a prev. defined var
assertive_timeout = PREBID_TIMEOUT;

// example of reading data from website and supplying as custom var
var DOMReady = function(a,b,c){b=document,c='addEventListener';b[c]?b[c]('DOMContentLoaded',a):window.attachEvent('onload',a);};
DOMReady(function () {
    try {
        var innerHTML = document.querySelector('body > div.navbar ul.nav > li:last-child > a').innerHTML;
        if ( innerHTML === "Logout" ) {
            assertive_userState = 'Anonymous';
        } else if ( innerHTML === "Register" ) {
            assertive_userState = 'LoggedIn';
        }
    } catch(e) {
        console.log(e);
    }
});  