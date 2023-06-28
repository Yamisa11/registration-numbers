describe("Registration number factory function tests", function(){
    it("should be able to set and get registration number CA74664", function(){
        var regNumbers = RegistrationNumbers()
        regNumbers.setRegistration("CA74664")
        assert.equal("CA74664", regNumbers.getRegistration())
    })
    it("should be able to check the location for registration number GP77B152 and return GP", function(){
        var regNumbers = RegistrationNumbers()
        regNumbers.setRegistration("GP77B152")
        assert.equal("GP", regNumbers.checklocIndicator())
    })
    it("should be able to get the list of registration numbers ['CA5587', 'EC33Y25', 'CJ78985']", function(){
        var regNumbers = RegistrationNumbers()
        regNumbers.setRegistration("CA5587")
        regNumbers.getAllRegistrations()
        regNumbers.setRegistration("EC33Y25")
        regNumbers.getAllRegistrations()
        regNumbers.setRegistration("CJ78985")
        regNumbers.getAllRegistrations()
        assert.deepEqual(['CA5587', 'EC33Y25', 'CJ78985'], regNumbers.getAllRegistrations())
    })
    it("should be not able to set and get registration number CJ12%^& as it contains special characters" , function(){
        var regNumbers = RegistrationNumbers()
        regNumbers.setRegistration("CJ12%^&")
        assert.equal("", regNumbers.getAllRegistrations())
    })
    it("should be not able to set and get registration number CA1234 twice" , function(){
        var regNumbers = RegistrationNumbers()
        regNumbers.setRegistration("CA1234")
        regNumbers.getAllRegistrations()
        regNumbers.setRegistration("CA1234")
        regNumbers.getAllRegistrations()
        assert.equal("CA1234", regNumbers.getAllRegistrations())
    })
    it("should be not able to return Please enter valid registration number when registration number is not" , function(){
        var regNumbers = RegistrationNumbers()
        regNumbers.setRegistration("CA!64")
        regNumbers.getAllRegistrations()
        regNumbers.getAllRegistrations()
       
        assert.equal("Please enter valid registration number!", regNumbers.errors())
    })
})