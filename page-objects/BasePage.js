class Base {


    get AcceptCookies(){
        return $('#body > div > div.message.type-modal > div.message-component.message-row.unstack > button:nth-child(2)')
    }

    launchApplicationSky(urltolaunchappend){
        console.log("In Base Page",urltolaunchappend)
        browser.url(urltolaunchappend, {'timeout':30000})
        
        browser.maximizeWindow()  
        browser.pause(3000)
         
    }


}
export default new Base()