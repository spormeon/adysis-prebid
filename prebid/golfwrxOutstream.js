 
            varrando.setupInPage("varrando-inpage1", getOptions({}), function (event) {
            }, function (message) {
            });
            varrando.setupInPage("varrando-inpage2", getOptions({maxWidth: '420px', v2: 1}), function (event) {
            }, function (message) {
            });
            varrando.setupInPage("varrando-inpage3", getOptions({size: 'fill'}), function (event) {
            }, function (message) {
            });

            function getOptions(options) {
                var v1 = 'https://demo.varrando.com/vast/varrando/vast01.xml';
                var v2 = 'https://demo.varrando.com/vast/varrando/vast02.xml';

                var ipOptions = {
                    volume: 0.4,
                    closeOffset: 4,
                    mobileCloseOffset: 2,
                    closeCompleted: true,
                    showWhen: 'adLoaded',
                    onlyAutoplay: false,
                    ads: {
                        useOnlyHtml5: false,
                        loadTimeout: 10000,
                        adLoadTimeout: 10000,
                        adPlayTimeout: 10000,
                        maxPodLength: 3,
                        redirectMaxLevel: 10,
                        adBreaks: [
                            {
                                tag: {
                                    url: (options.v2 ? v2 : v1)
                                }
                            }
                        ]
                    },
                    tz: 0,
                    playerSwf: '//d27kkruj8fr60l.cloudfront.net/os/flash/4/FlashPlayback.swf',
                    license: 'd0xJY29G8m6uhal3rH19mqR4r4GAj5GvmYZr2dC4q3+t0KBoo269hal69A==',
                    credits: {
                        name: 'by Varrando',
                        url: 'https://adysis.com'
                    },
                    header: 'Advertising',
                    footer: {
                        name: 'Adysis Technology',
                        url: 'https://adysis.com'
                    }
                };

                if (options.aspectRatio) {
                    ipOptions.aspectRatio = options.aspectRatio;
                }
                if (options.maxWidth) {
                    ipOptions.maxWidth = options.maxWidth;
                }
                if (options.size) {
                    ipOptions.size = 'fill';
                    ipOptions.watermark = ipOptions.header;
                    delete ipOptions.header;
                    delete ipOptions.footer;
                }

                return ipOptions;
            }
       