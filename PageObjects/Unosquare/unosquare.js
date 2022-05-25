module.exports = {
    'test pages validation' : function(browser) {
      var unosquare = browser.page.mainpage();
      unosquare.navigate()
      .waitForElementVisible('@contactusMenu')
      .click('@contactusMenu')
      .waitForElementVisible('@companyTextField')
	    .setValue('@companyTextField', 'Company')
	    .assert.containsText('@textHearH2', 'WE WANT TO HEAR FROM YOU!')
	    .assert.title('Agile Collaborative Software Development | Contact Unosquare')
	    .assert.urlEquals('https://www.unosquare.com/ContactUs')
	    .waitForElementPresent('@contactUsBreadcrumb')
      .assert.cssProperty('@submitBtn', 'overflow', 'visible')
      .assert.not.cssProperty('@submitBtn', 'font-size', '12px')
      .assert.attributeContains('@submitBtn', 'value', 'Submit');
      browser.end();
    },
    'test command example' : function(browser) {
      var unosquare = browser.page.mainpage();
      unosquare
      .navigate()
      .contactUnosquare();
      
      browser.end();
    }
  }