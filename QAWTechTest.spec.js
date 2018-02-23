describe('Valid Submission', function() {
    it('Given I am on the QAWorks Site', function() {
        browser.url('https://qaworks.com/');
        // browser.setValue('#search_form_input_homepage', 'WebdriverIO');
        // browser.click('#search_button_homepage');

        var title = browser.getTitle();
        console.log('title: ' + title);
        expect(title).toBe('QAWorks Limited - Software Quality & Delivery Experts')
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    });

    it('Then I should be able to contact QAWorks with the following information', function() {
        browser.click('=CONTACT US');
        var title = browser.getTitle();
        console.log('title: ' + title);
        expect(title).toBe('CONTACT US | QAWorks Limited')

    });

    // it('should pause for a bit', function() {
    //     browser.pause(2000);
    // });

    it('And I should be able to enter my name', function() {
        var elementName = "your-name";
        var elementValue = "j.Bloggs";
        var elementType = "input";

        setContactUsValue(elementName, elementValue);
        console.log("name: " + getContactUsValue(elementType, elementName));
        expect(getContactUsValue(elementType, elementName)).toBe(elementValue);
    });

    it('And I should be able to enter a subject', function() {
        var elementName = "your-company";
        var elementValue = "test automation";
        var elementType = "input";

        setContactUsValue(elementName, elementValue);
        console.log("subject: " + getContactUsValue(elementType, elementName));
        expect(getContactUsValue(elementType, elementName)).toBe(elementValue);
    });

    it('And I should be able to enter my email address', function() {
        var elementName = "your-email";
        var elementValue = "j.Bloggs@qaworks.com";
        var elementType = "input";

        setContactUsValue(elementName, elementValue);
        console.log("email: " + getContactUsValue(elementType, elementName));
        expect(getContactUsValue(elementType, elementName)).toBe(elementValue);
    });

    it('And I should be able to enter a message', function() {
        var elementName = "your-message";
        var elementValue = "please contact me I want to find out more";
        var elementType = "textarea";

        setContactUsValue(elementName, elementValue);
        console.log("message: " + getContactUsValue(elementType, elementName));
        expect(getContactUsValue(elementType, elementName)).toBe(elementValue);
    });

    // it('should pause for a bit', function() {
    //     browser.pause(2000);
    // });

    // it('could try to do this', function() {
    //     var elem = $(".your-name")
    //     console.log("elem.getAttribute: " + elem.getAttribute('value'));
    //     console.log("elem.getText: " + elem.getText());
    // });

});

function setContactUsValue(elementName, elementValue) {
    var elem = $("." + elementName)
    elem.click();
    elem.keys(elementValue);
};

function getContactUsValue(elementType, elementName) {
    // var allInputs = $$('#qaworks-contact-us input');
    var allInputs = $$('#qaworks-contact-us ' + elementType);

    for (var i = 0, len = allInputs.length; i < len; i++) {
        if (allInputs[i].getAttribute('name') === elementName) {
            return(allInputs[i].getAttribute('value')); 
        }
    }    
};