describe('calculadora App', function() {
    var ptor;
    var home = '/';   
    
    beforeEach(function() {        
        browser.get(home);
        ptor = protractor.getInstance();        
    });

    it('Abrir Main', function() {        
        ptor.sleep(2000);
        expect(true).toBe(true);          
    });
    
});
