'use strict';

/**
 * @ngdoc service
 * @autor joshuamoreno1@gmail.com
 * @name calculadoraAppApp.Mathservice
 * @description
 * # Mathservice
 * Service in the calculadoraAppApp.
 */
angular.module('calculadoraApp')
  .service('Mathservice', function Mathservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function  
    
    this.sumar = function(a,b){
      return a+b;  
    };
    
    //Aqui se deben implementar las demas funciones aritmeticas
    
});
