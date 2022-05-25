module.exports = {
    'Pull Request' : function(browser) {
      browser
      .windowMaximize()
      .url('https://nightwatchjs.org')
      .waitForElementVisible('body')

      //click developer guide en header
      .useXpath() 
      .waitForElementVisible('/html/body/section[1]/div/div[4]/header/div[2]/div/ul/li[2]/a')
      .click('/html/body/section[1]/div/div[4]/header/div[2]/div/ul/li[2]/a')

      //click searchbar y escribir
      .useCss()
      .click('button[class="DocSearch DocSearch-Button"')
      .waitForElementVisible('div[class="DocSearch-Modal"]')
      .setValue('input[class="DocSearch-Input"]', 'Asserts')

      //click en el primer resultado
      //.useXpath() 
      .waitForElementVisible('li a[href="https://nightwatchjs.org/guide/writing-tests/expect-assertions.html#expect-assertions"]').click('a[href="https://nightwatchjs.org/guide/writing-tests/expect-assertions.html#expect-assertions"]')

      //verifico texto menu izquierdo, contenga "Plugin API"
      .waitForElementVisible('a[href="/guide/extending-nightwatch/"]').click('a[href="/guide/extending-nightwatch/"')
      .waitForElementVisible('a[href="/guide/extending-nightwatch/plugin-api.html"]')

      //ir a blog
      .waitForElementVisible('a[href="/guide/extending-nightwatch/"]').click('a[href="/guide/extending-nightwatch/"]')

      //verify the following text exists: "Nightwatch.js was created in Oslo, Norway by Pineview.io – 
      //an independent software consultancy; it is now being maintained by all these fine people with 
      //help from all our contributors."
      //.useXpath() 
      //.assert.containsText('//footer//div/div[1]//div/p', 'Nightwatch.js was initially created in Oslo, Norway by')

              

      


      .pause(1000)
      .end();
    }
  };