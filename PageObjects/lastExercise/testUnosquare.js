module.exports = {
    'FinalExercise' : function(browser) {
      var unosquare2 = browser.page.homepage();
      unosquare2.navigate()
      .waitForElementVisible('@blog')
      .click('@blog')
      .waitForElementVisible('@blogHeader')
      .assert.containsText('@blogHeader', 'DIGITAL TRANSFORMATION BLOG')
	    .assert.urlEquals('https://blog.unosquare.com/')
	    .waitForElementPresent('@recentPosts')
	    .waitForElementPresent('@popularPosts')
      //  .click('@searchBar')
      //Go to About page
      .waitForElementPresent('@aboutMenu')
      .click('@aboutMenu')
      .waitForElementPresent('@names')
      .assert.containsText({selector: '@names', index: 0},'MARIO DI VECE')
      .assert.containsText({selector: '@names', index: 1},'GIANCARLO DI VECE')
      .assert.containsText({selector: '@names', index: 2},'EDUARDO ARIAS')
      .assert.containsText({selector: '@names', index: 3},'IGNACIO MIRANDA')
      .assert.containsText({selector: '@names', index: 4},'DIEGO HUERTA')

      browser.end();
      console.log("fin de primer test que se deberia ejecutar")
    },

    'Search command' : function(browser) {
      var unosquare = browser.page.homepage();
      unosquare
      .navigate('https://blog.unosquare.com/')
      .searchesA(unosquare.getData().Search1)
      .searchesA(unosquare.getData().Search2)
      .searchesA(unosquare.getData().Search3)
      .searchesA(unosquare.getData().Search4);
      browser.end();
      console.log("luego end Final");
    }
  }
