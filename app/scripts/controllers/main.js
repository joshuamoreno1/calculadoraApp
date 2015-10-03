'use strict';

/**
 * @ngdoc function
 * @autor joshuamoreno1@gmail.com
 * @name calculadoraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calculadoraApp
 */
angular.module('calculadoraApp')
  .controller('MainCtrl', [ '$scope', 'Mathservice', function ($scope, Mathservice) {
    
    //Variables
      
    $scope.mensajeInicial = 'Calculadora App';
    $scope.resultado = '';
    $scope.numero1 = 0;
    $scope.numero2 = 0;
    $scope.operacionSeleccionada = null;  
    $scope.operacionTexto = '';
      
    $scope.operaciones = {
        '+': Mathservice.sumar        
    };
      
    //Codigo principal
    $scope.main = function(){
        //Limita la longitud de cada campo
        $scope.limitarCampo('numero1', 2);
        $scope.limitarCampo('numero2', 1);
        
        //Observa los campos y los botones de las operaciones para disparar el calculo
        $scope.$watch('[numero1, numero2, operacionSeleccionada]', function(newValues) {            
            if(angular.isDefined(newValues[0]) && angular.isDefined(newValues[1]) && angular.isDefined(newValues[2])){
               $scope.resultado = newValues[2](newValues[0],newValues[1]);
            }  
        }, true);   
    };
      
    
    //funcion que usa un wath para limitar la longitud de un campo
    $scope.limitarCampo = function(modelo,longitud){        
        if(angular.isDefined($scope[modelo])){        
            $scope.$watch(modelo,function(newval,oldval){                
                if(!!newval && !!oldval){
                    if(newval.toString().length > longitud){
                        $scope[modelo] = oldval;  
                    }
                }
            });
        }
    };
     
    /**
     * Con base en el signo de la operacion, busca en el objeto de operaciones
     * la funcion asociada del servicio de Mathservice para realizar el calculo
    */
    $scope.seleccionarOperacion = function(operacion){
      if(!!$scope.operaciones[operacion]){
            $scope.operacionSeleccionada = $scope.operaciones[operacion];
            $scope.operacionTexto = operacion;
      }
    };
      
    $scope.main();
  }]);
