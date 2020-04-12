//shows the slots on the page
window.addEventListener("DOMContentLoaded", function() {
  const ads = [
    {
      "selector": ".p-body-inner",
      "location": "afterbegin",
      "html": '<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid13Slot"></div></div><br>',
    },
    // This selector doesn't exist in this snippet and will be skipped by the condition below without crashing...
    {
      "selector": "#spacer1",
      "location": "afterbegin",
      "html": '<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid9Slot"></div></div><br><br><br>',
    },
    {
      "selector": ".block.block--category.block--category99",
      "location": "beforeend",
      "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid8Slot"></div></div>'
    },
    {
      "selector": "#spacer2",
      "location": "beforebegin",
      "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid5Slot"></div></div><br>'
    },
    {
      "selector": "#advert1",
      "location": "beforeend",
      "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid8Slot"></div></div><br>'
    },
    {
      "selector": "#advert2",
      "location": "afterend",
      "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid4Slot"></div></div><br>'
    },
    {
      "selector": ".block-outer.block-outer--after",
      "location": "beforebegin",
      "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid7Slot"></div></div><br>'
    },
    {
      "selector": ".p-breadcrumbs.p-breadcrumbs--bottom",
      "location": "afterend",
      "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid4Slot"></div></div><br>'
    },
    {
      "selector": "#adfooter",
      "location": "afterbegin",
      "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid6Slot"></div></div><br>'
    }
    // Add your other ads here using similar structure above...
  ];
  ads.forEach(ad => {
	adContainer = document.querySelector(ad.selector);
	if (adContainer) {
	  adContainer.insertAdjacentHTML(ad.location, ad.html);
   }
 });
});