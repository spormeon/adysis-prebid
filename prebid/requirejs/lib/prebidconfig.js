adyjs.setConfig({
    	rubicon: {singleRequest: true},
    	priceGranularity: customConfigObjectA,
     consentManagement: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400, allowAuctionWithoutConsent: true },
      cache: {url: "https://prebid.adnxs.com/pbc/v1/cache"},
      s2sConfig: {
        accountId: 'e31f627f-53a3-4288-9979-482d3c6ffc76',
        enabled: false,
        bidders: ['sovrn','somoaudience','rhythmone','pulsepoint','rubicon','ix','openx','33across','unruly'],
        timeout: PREBID_TIMEOUT/2,
        adapter: 'prebidServer',
        endpoint: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
        syncEndpoint: 'https://prebid.adnxs.com/pbs/v1/cookie_sync',
        cookieSet: true,
        cookiesetUrl: 'https://acdn.adnxs.com/cookieset/cs.js'
      },
      userSync: {
        iframeEnabled: true,
        syncsPerBidder: 10, // and no more than 3 syncs at a time
        syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
      filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
      // enableOverride: true // publisher will call `pbjs.triggerUserSyncs()'
       },
       debug: true,
       useBidCache: true,
       enableSendAllBids: false, // Default will be `true` as of 1.0
       bidderSequence: 'random', // Default is random
       publisherDomain: 'golfwrx.com',
       bidderTimeout: PREBID_TIMEOUT+500,
       pubcid: {expInterval: 525600},
       currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
       sizeConfig: [
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[580,400],[550,310],[970,90],[728,90],[468,60],[336,280],[320,100],[320,50],[300,250],[250,250],[300,600],[1,1]], labels: [ 'desktop'] },
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[550,310],[300,600],[300,250],[250,250],[160,600],[120,600],[1,1]], labels: [ 'desktopmenu'] },
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[300,250],[250,250],[1,1]], labels: [ 'desktopmenu1'] },
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[970,90],[970,250],[728,90],[468,60],[320,50],[300,250],[728,90],[250,250],[468,60],[320,100],[336,280],[580,400],[550,310],[1,1]], labels: [ 'desktopleader'] },
         { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[550,310],[580,400],[728,90],[468,60],[320,50],[320,100],[336,280],[300,250],[300,600],[250,250],[1,1]], labels: [ 'tablet'] },
         { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[300,250],[300,600],[250,250],[1,1]], labels: [ 'tabletmenu'] },
         { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[550,310],[300,250],[250,250],[320,50],[320,100],[336,280],[1,1]], labels: [ 'phone'] },
         { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[300,250],[250,250],[1,1]], labels: [ 'phonemenu'] }
       ]
     });