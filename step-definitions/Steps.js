import { Given, When, Then } from 'cucumber'
import base from '../page-objects/BasePage'
import pageActions from '../page-objects/PageActions'


Given(/^I am on the (.*) page$/, function(urlToLaunch){ 

    console.log("In Step Def",urlToLaunch)
    const fullUrlfromFeature = urlToLaunch
    var urltolaunchAppend
    if(fullUrlfromFeature.includes("shop"))
    {
        urltolaunchAppend = '/shop'
    }
    else
    {
        urltolaunchAppend = '/'
    }
    
    base.launchApplicationSky(urltolaunchAppend)
    pageActions.acceptCookies()

})

Then(/^I should see an editorial section$/, function(){ 

    pageActions.verifyEditorialSection()

})


Then(/^I see a list of offers with a price to it$/, function(){ 

    pageActions.verifyOffers()

})


Then(/^I navigate to 'Deals'$/, function(){ 

    pageActions.selectDeals()

})

Then(/^the user should be on the (.*) page$/, function(urlpath){ 

    pageActions.checkIfOnOffersPage()

})

When(/^I search 'sky' in the search bar$/, function(){ 

    pageActions.clickOnSearchIcon()
    pageActions.searchForSky()
})