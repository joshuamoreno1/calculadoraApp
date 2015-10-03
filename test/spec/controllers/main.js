'use strict';

describe('Controller: MainCtrl', function () {

  //Inicializa el Modulo
  beforeEach(module('calculadoraApp'));

  var MainCtrl,
    scope;

  // Crea el controlador y hace mock del scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('Prueba de Mensaje Inicial', function () {
    expect(scope.mensajeInicial).toBe('Calculadora App');
  });
});
