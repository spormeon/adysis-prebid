//shows the slots on the page
window.addEventListener("DOMContentLoaded", function() {
 const ads = [
{ "selector": "#ch_top", "location": "afterbegin", "html": '<div class="ad-reporter-ahytrfg35423"><div id="inreedvid13Slot"></div></div>' },
{ "selector": "#ch_sidebar_top", "location": "afterbegin", "html": '<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid9Slot"></div></div><br>' },
{ "selector": "#ch_sidebar_mid", "location": "beforebegin", "html": '<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid10Slot"></div></div><br>' },
{ "selector": "#ch_sidebar_left", "location": "beforeend", "html": '<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid8Slot"></div></div>' },
{ "selector": "#ch_sidebar_bottom", "location": "beforebegin", "html": '<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid5Slot"></div></div>' },
{ "selector": "#ch_post_list_1", "location": "afterend", "html": '<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid4Slot"></div></div><br>' },
{ "selector": "#ch_post_list_last", "location": "afterend", "html": '<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid4Slot"></div></div><br>' },
{ "selector": "#ch_post_inside_1", "location": "afterend", "html": '<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid4Slot"></div></div><br>' },
{ "selector": "#ch_post_after", "location": "beforebegin", "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid7Slot"></div></div><br>' },
{ "selector": "#adfooter", "location": "afterbegin", "html": '<div class="ad-reporter-ahytrfg35423"><div id="inreedvid6Slot"></div></div>' }
];
  ads.forEach(ad => {
	adContainer = document.querySelector(ad.selector);
	if (adContainer) {
	  adContainer.insertAdjacentHTML(ad.location, ad.html);
   }
 });
});
