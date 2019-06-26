pbjs.setConfig({
     priceGranularity: customConfigObject,
     consentManagement: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*200, allowAuctionWithoutConsent: true },
        //cache: {url: "//prebid.adnxs.com/pbc/v1/cache"},
      s2sConfig: {
        accountId: 'e31f627f-53a3-4288-9979-482d3c6ffc76',
        enabled: true,
        bidders: ['sovrn','somoaudience','districtm','rhythmone','pulsepoint','gamoshi','rubicon','unruly','openx'],
        timeout: PREBID_TIMEOUT/1.5,
        adapter: 'prebidServer',
        endpoint: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
        syncEndpoint: 'https://prebid.adnxs.com/pbs/v1/cookie_sync',
        cookieSet: true,
        cookiesetUrl: 'https://acdn.adnxs.com/cookieset/cs.js'
      },
      userSync: {
        iframeEnabled: true,
        syncsPerBidder: 50, // and no more than 3 syncs at a time
        syncDelay: PREBID_TIMEOUT*2.5, // 5 seconds after the auction
      filterSettings: { iframe: { bidders: ['pulsepoint'], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
       },
       debug: true,
       useBidCache: USERBIDCACHE,
       enableSendAllBids: false, // Default will be `true` as of 1.0
       bidderSequence: 'random', // Default is random
       publisherDomain: 'golfwrx.com',
       bidderTimeout: PREBID_TIMEOUT+300,
       pubcid: {expInterval: 525600},
       currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
       sizeConfig: [
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[550, 310], [728, 90], [468, 60], [320, 50], [300, 250], [250, 250], [1, 1]], labels: ['desktop'] },
         { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[550, 310], [728, 90],  [468, 60], [320, 50], [300, 250], [250, 250], [1, 1]], labels: ['tablet'] },
         { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[550, 310], [300, 250], [250, 250], [320, 50], [1, 1]], labels: ['phone'] }
       ]
     });