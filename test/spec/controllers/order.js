'use strict';

describe('Controller: OrderCtrl', function () {

  // load the controller's module
  beforeEach(module('waitressApp'));

  var OrderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderCtrl = $controller('OrderCtrl', {
      $scope: scope,
      dishes: []
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});