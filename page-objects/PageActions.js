class PageActions {

 
    get acceptButton(){

        return $('/html/body/div/div[3]/div[3]/button[2]')
    }

    get dealsElement(){

        return $('//*[@id="masthead-navigation"]/div/div[1]/div[1]/nav/ul/li[5]/div/div[1]/a')
    }

    get offersPageLabel(){

        return $('//*[@id="section-2"]/div/div/div[1]/div/h1')
    }


    get searchIcon(){

        return $('//*[@class="search-toggle__icon"]')
    }

    get searchBar(){

        return $('//*[@id="masthead-navigation"]/div/div[1]/div[2]/div/div/div/div/div/div/div/input')
    }

    verifyEditorialSection(){
      
       $('//*[@id="search-results-container"]/div[1]/div[1]/div/div/div[1]/a').waitForExist()
    }


    searchForSky(){    
        
        this.searchBar.click()
        this.searchBar.setValue('sky')
        browser.pause(2000)
    }

    clickOnSearchIcon(){    
        
        this.searchIcon.click()
        browser.pause(1000)
    }

    checkIfOnOffersPage(){
        
        this.offersPageLabel.waitForExist()
    }

    selectDeals(){
        
        this.dealsElement.waitForExist()
        this.dealsElement.click()
        browser.pause(1000)
    }

    acceptCookies(){

        const iFrame = $("#sp_message_iframe_207015")
        
    if(iFrame.isExisting())
    {
        iFrame.scrollIntoView()
        browser.switchToFrame(iFrame)
        browser.pause(1000)
        this.acceptButton.waitForExist()
        this.acceptButton.click()
        browser.pause(500)
        browser.switchToParentFrame()
    }
}




    verifyOffers(){

        var str1 = "A Feast of Festive Football"
        var str2 = "£39"
        var str3 = "Endless Entertainment"
        var str4 = "£27"
        var str5 = "Sky Sports & Movie Magic"
        var str6 = "£46"


        $('//*[@id="sports"]/div/div[1]/div[3]/div/h3/span/div[1]/strong').waitForExist()
        $('//*[@id="sports"]/div/div[1]/div[3]/div/h3/span/div[1]/strong').scrollIntoView()

        if(($('//*[@id="sports"]/div/div[1]/div[3]/div/h3/span/div[1]/strong').getText().includes(str1))&&
        ($('//*[@id="sports"]/div/div[1]/div[4]/div[1]/div[1]/div/span[1]/span/span[1]').getText().includes(str2))&&
        ($('//*[@id="netflix"]/div/div[1]/div[3]/div/h3/span/div[1]/strong').getText().includes(str3))&&
        ($('//*[@id="netflix"]/div/div[1]/div[4]/div[1]/div[1]/div/span[1]/span/span[1]').getText().includes(str4))&&
        ($('//*[@id="UTVCin"]/div/div[1]/div[3]/div/h3/span/div[1]/strong').getText().includes(str5))&&
        ($('//*[@id="UTVCin"]/div/div[1]/div[4]/div[1]/div[1]/div/span[1]/span/span[1]').getText().includes(str6)))
           {
            console.log("Found Offer 1 : ",$('//*[@id="sports"]/div/div[1]/div[3]/div/h3/span/div[1]/strong').getText() )
            console.log("Found Offer 2 : ",$('//*[@id="netflix"]/div/div[1]/div[3]/div/h3/span/div[1]/strong').getText() )
            console.log("Found Offer 3 : ",$('//*[@id="UTVCin"]/div/div[1]/div[3]/div/h3/span/div[1]/strong').getText() )
           }
        browser.pause(500)

    }

}

export default new PageActions()