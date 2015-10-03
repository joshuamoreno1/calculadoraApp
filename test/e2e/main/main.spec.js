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
    
    iit('Calcular numero Main', function() {        
        ptor.sleep(2000);         
        element(by.model('sumarBoton')).click().then(function() {
           element(by.model("numero1")).sendKeys(2);
           element(by.model("numero2")).sendKeys(2);           
           expect(element(by.id("resultado")).getText()).toBe("4");
        });
    });
    
});
