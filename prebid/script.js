var size = [
  [300, 600],
  [300, 250],
  [160, 600],
  [120, 600],
  [250, 250]
];
googletag.cmd.push(function () {
  (function (googletag, pbjs, config) {
    var sizeMappings = {};
    var slots = {};
    Object.keys(config.sizeMappings).forEach(function (key) {
      var sizeMapping = googletag.sizeMapping();
      config.sizeMappings[key].forEach(function (mapping) {
        console.log('sizeMapping ', sizeMapping, ' mapping ', mapping);
        sizeMapping.addSize.apply(sizeMapping, mapping);
      });
      sizeMapping.build();
      sizeMappings[key] = sizeMapping;
      console.log('created sizemapping ', key, ' ', sizeMappings[key]);
    });

    //googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs(true, true);
    googletag.pubads().setCentering(true);
    googletag.pubads().disableInitialLoad();
    googletag.enableServices();
    googletag.pubads().addEventListener('impressionViewable', function (event) {
      var elementId = event.slot.getSlotElementId();
      var slotConfig = slots[elementId];
      if (slotConfig) {
        var handle = setTimeout(function () {
          googletag.cmd.push(function () {
            googletag.pubads().refresh([slotConfig.slot]);
          });
        }, config.definitons[elementId].timeout);
        console.log('handle for time ', handle, ' elementId ', elementId, ' duration ', config.definitons[elementId].timeout);
      }
    });
    Object.keys(config.definitons).forEach(function (key) {
      var def = config.definitons[key];
      var slot = googletag.defineSlot(def.adUnitPath, def.size, key);
      slot.setTargeting('test', 'refresh');
      slot.addService(googletag.pubads());
      googletag.display(key);
      slots[key] = { slot: slot };
    });
    googletag.pubads().refresh();

    // googletag.pubads().refresh();
  })(window.googletag, window.pbjs, {
    definitons: {
      topSlot: {
        adUnitPath: '/1001824/prebid_test2',
        size: size,
        sizeMapping: 'mappingleaderslot',
        timeout: 30000,
      },
      middlerightSlot: {
        adUnitPath: '/1001824/prebid_test3',
        size: size,
        sizeMapping: 'mappingbigboxslot',
        timeout: 30000,
      },
      bottomrightSlot: {
        adUnitPath: '/1001824/prebid_test1',
        size: size,
        sizeMapping: 'mappingbigboxslot',
        timeout: 30000,
      },
      bottomleftSlot: {
        adUnitPath: '/1001824/prebid_test4',
        size: size,
        sizeMapping: 'mappingbigboxslot',
        timeout: 30000,
      },
    },
    sizeMappings: {
      mappingleaderslot: [
        [
          [1024, 769],
          [
            [970, 250],
            [970, 90],
            [728, 90],
            [468, 60],
            [320, 50],
            [234, 60]
          ]
        ],
        [
          [768, 500],
          [
            [728, 90],
            [468, 60],
            [320, 50],
            [234, 60]
          ]
        ],
        [
          [1, 1],
          [
            [320, 50],
            [234, 60]
          ]
        ],
      ],
      mappingbigboxslot: [
        [
          [1024, 769],
          [
            [300, 600],
            [300, 250],
            [160, 600],
            [120, 600],
            [250, 250]
          ]
        ],
        [
          [768, 500],
          [
            [300, 250],
            [250, 250]
          ]
        ],
        [
          [1, 1],
          [
            [300, 250],
            [250, 250]
          ]
        ],
      ]
    }
  });
});
