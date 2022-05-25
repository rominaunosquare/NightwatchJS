var footerSocialLinksValidation = {
    footerSocialLinks: function() {
      return this
        .waitForElementPresent('@twitter')
        .waitForElementPresent('@github')
    }
  };

module.exports = {
    url: 'https://nightwatchjs.org/api/',
    commands: [footerSocialLinksValidation],

    elements: {
      //emailSubscribe: {selector: 'input[placeholder="Type your email…"]'},

     search: {
        selector: '.DocSearch-Button-Placeholder'
      },

     modalSearch: {
        selector: 'div[class="DocSearch-Modal"]'
      },

      searchText: {
        selector: 'input[class="DocSearch-Input"]'
      },

      ChatOnDiscord: {
        selector: "li a[href = 'https://discord.gg/SN8Da2X']"
      },

      twitter: {
        selector: "span a[href = 'https://twitter.com/nightwatchjs']"
      },

      github: {
        selector: "span a[href = 'https://github.com/nightwatchjs']"
      },

      developerGuide: {
        selector: "li[3] a[href = '/about']"
      }
    }
  };