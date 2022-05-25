module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser.globals.waitForConditionTimeout = 7000
    },

'POST Reqres': function (browser) {
        var apiUrl = 'https://reqres.in/api/users'
        var postData = {'name':'James', 'job':'qa'}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
            browser.assert.equal(response.statusCode, '201')
            browser.assert.equal(response.body.name, 'James')
            browser.assert.equal(response.body.job, 'qa')
        })
    },

'GET TO tle.ivanstanojevic.me/api/tle/V': function (browser) {
    var apiUrl = 'https://tle.ivanstanojevic.me/api/tle/'
    browser.apiGet(apiUrl, function (response) {
            var data = JSON.parse(response.body)
            browser.assert.equal(data.parameters.sort, 'popularity')
            //browser.assert.equal(data.totalItems, '14431')
        })
    },

'GET TO https://dog.ceo/api/breeds/list/all': function (browser) {
    var apiUrl = 'https://dog.ceo/api/breeds/list/all'
    browser.apiGet(apiUrl, function (response) {
            var data = JSON.parse(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(data.message.finnish, 'lapphund')
            browser.assert.equal(data.message.greyhound, 'italian')

        })
    }
};