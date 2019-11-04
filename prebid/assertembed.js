let options = {
        entities: ['FHkAkgiDWrXm4dZFw'],
        timezone: 'UTC'
    };
    let auth = {
        userId: 'nKpSYRQrPPvFne4Mt',
        entities: ['FHkAkgiDWrXm4dZFw'],
        validUntil: validUntil ? validUntil : (+ new Date() + (1000 * 60 * 60 * 24 * 7))
    };

    options = JSON.stringify(options);
    auth = JSON.stringify(auth);

    const hmac = crypto.createHmac('sha256', 'SlrIDPOBy5OtkFl8QSp0daks7DmNitwg7VesB8Sj4Th').update(auth).digest('hex');
    const params = 'options=' + encodeURIComponent(options) + '&auth=' + encodeURIComponent(auth) + '&hmac=' + hmac;

    const url = 'https://suite.assertiveyield.com/' + 'embed/view/ad-units?' + params;