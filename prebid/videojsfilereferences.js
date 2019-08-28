//scripts and stylesheets to get video instream working - START
//load up ima3.js
(function () {
var ima = document.createElement("script");
ima.async = true;
ima.type = "text/javascript";
ima.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
var nodeima = document.getElementsByTagName("footerbid1")[0];
nodeima.insertBefore(ima, nodeima.fifthChild);
})();
//load up videojs-min.css
(function () {
var vidcss = document.createElement("link");
vidcss.async = true;
vidcss.rel = "stylesheet";
vidcss.href = "https://adops.adysis.com/video-js-min.css";
var nodevidcss = document.getElementsByTagName("footerbid1")[0];
nodevidcss.insertBefore(vidcss, nodevidcss.sixthChild);
})();
//load up video-min.js
(function () {
var vidmin = document.createElement("script");
vidmin.async = true;
vidmin.type = "text/javascript";
vidmin.src = "https://adops.adysis.com/video-min.js";
var nodevidmin = document.getElementsByTagName("footerbid1")[0];
nodevidmin.insertBefore(vidmin, nodevidmin.seventhChild);
})();
//load up videojs-min.css
(function () {
var vpaidcss = document.createElement("link");
vpaidcss.async = true;
vpaidcss.rel = "stylesheet";
vpaidcss.href = "https://adops.adysis.com/videojs.vast.vpaid-min.css";
var nodevpaidcss = document.getElementsByTagName("footerbid1")[0];
nodevpaidcss.insertBefore(vpaidcss, nodevpaidcss.eigthChild);
})();
//load up vpaid.js
(function () {
var vpaid = document.createElement("script");
vpaid.async = true;
vpaid.type = "text/javascript";
vpaid.src = "https://adops.adysis.com/videojs_5.vast.vpaid-min.js";
var nodevpaid = document.getElementsByTagName("footerbid1")[0];
nodevpaid.insertBefore(vpaid, nodevpaid.ninthChild);
})();