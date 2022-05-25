module.exports = {
    'Pull Request' : function(browser) {
      browser
      .windowMaximize()
      .url('https://nightwatchjs.org')
      .waitForElementVisible('body')

      //clicl developer guide en header
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
      .waitForElementPresent('a[href="https://nightwatchjs.org/guide/writing-tests/expect-assertions.html#expect-assertions"]')
      .click('a[href="https://nightwatchjs.org/guide/writing-tests/expect-assertions.html#expect-assertions"]')









      .pause(1000)
      .end();
    }
  };