var searches = {
    searchesA: function(searchVar) {
      //this.pause(10000); 
      //const form = getData();
      //console.log(form);
      return this
        .waitForElementVisible('@searchBar', 1000)
        .click('@searchBar')
        .setValue('@searchBar', searchVar)
        .click('@searchButton')
        .waitForElementVisible('@resultsTitle')
        .assert.containsText('@resultsTitle', searchVar)
        console.log("asserts");
    },

    getData: function() {
      return require('../../dataExternal/lastExerciseJSON.json');
      },
  };

module.exports = {
    url: 'https://www.unosquare.com',
    commands: [searches],
    elements: {

		  blog: {
  		  selector: "li a[href = 'https://blog.unosquare.com']"
  		},

	    blogHeader: {
		    selector: "div[class='breadcrumb-container'] h1"
	    },

      recentPosts: {
        selector: "input[id='tab1']"
      },
    
      popularPosts: {
        selector: "input[id='tab2']"
      },

      searchBar: {
        selector: "div[class='row'] div[class='col-lg-3'] form[class='search-container'] input"
      }, 

      searchButton: {
        selector: "button[class='search-submit link-blue']"
      },

      resultsTitle: {
        selector: "h3[class='results-title']"
      },

      aboutMenu: {
        selector: "li a[href = 'https://www.unosquare.com/About']"
      },

      names: {
        selector: "span[class= 'name']"
      }
    }
  }