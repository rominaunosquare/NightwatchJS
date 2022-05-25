module.exports = {
    'test page nightwatch validation' : function(browser) {
      var nightwatch = browser.page.landingpage();
      nightwatch.navigate()
	 	.assert.urlEquals('https://nightwatchjs.org/api/')
	    .assert.title('API Reference | Nightwatch.js')
	  	.waitForElementVisible('@ChatOnDiscord')
	  	.waitForElementVisible('@search')
		.click('@search')
		.waitForElementVisible('@modalSearch')
		.setValue('@searchText', 'page objects')
		//assert.enabled(),assert.visible(),.pause(1000)
        browser.end();
    }
}

module.exports = {
    'test command example' : function(browser) {
      var socialMedia = browser.page.landingpage();
      socialMedia
      .navigate()
      .footerSocialLinks();

      console.log("paso por aqui");
      browser.end();
    }
};
