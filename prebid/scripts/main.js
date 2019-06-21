//Load common code that includes config, then load the app logic for this page.
requirejs(['./slots'], function (slots) {
    requirejs(['timeout']);
});

//Slots to send to page, have to add 1 on to the child (number) because the div counts as 1 in the string 
window.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#mvp-content-main p:nth-child(2)").insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvidSlot"></div></div><br>');
    document.querySelector("#mvp-content-main p:nth-child(6)").insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid1Slot"></div></div><br>');
    document.querySelector("#mvp-content-main p:nth-child(10)").insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid2Slot"></div></div><br>');
    document.querySelector("#mvp-content-main p:nth-child(14)").insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid3Slot"></div></div><br>');

});