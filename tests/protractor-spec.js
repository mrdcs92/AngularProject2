describe('Test going to category page', function() {
    it("should go to caliber website", function(){
        browser.ignoreSynchronization = true;
        browser.get("https://dev-caliber.revature.tech/");
        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual("https://dev-caliber.revature.tech/");
    });
    it("should login with right credentials", function() {
        element(by.name('username')).sendKeys("calibot@revature.com");
        element(by.name('pw')).sendKeys("*6Ak4-&kXnNTfTh6");
        element(by.className('btn')).click();
        browser.sleep(3000);
        expect(browser.getCurrentUrl()).toEqual("https://dev-caliber.revature.tech/caliber/#/vp/home");
    });
    it("should go to the Category Settings page", function(){
        browser.ignoreSynchronization = false;
        browser.get("https://dev-caliber.revature.tech/caliber/#/vp/category");
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toEqual("https://dev-caliber.revature.tech/caliber/#/vp/category");
    });
    it("should click on Create Category button", function(){
        //browser.sleep(1000);
        element(by.xpath("/html/body/div/ui-view/ui-view/div[1]/div/div/div/ul/li")).click();
    });
    it("should enter '12345' into text field", function(){
        browser.sleep(500);
        element(by.xpath("//*[@id=\"categoryName\"]")).sendKeys("12345");
    });
    it("should click the Submit button", function(){
        //browser.sleep(1000);
        element(by.xpath("//*[@id=\"addCategoryModal\"]/div/div/div[2]/div/div[2]/input")).click();
        browser.sleep(2000);
        expect(element(by.linkText("12345")));
    });
});