//load up preconnect urls
(function () {
var pclink1 = document.createElement("link");
pclink1.rel = "preconnect";
pclink1.href = "https://www.googletagservices.com/";
pclink1.crossorigin;
var nodepclink1 = document.getElementsByTagName("footerbid1")[0];
nodepclink1.insertBefore(pclink1, nodepclink1.firstChild);
})();