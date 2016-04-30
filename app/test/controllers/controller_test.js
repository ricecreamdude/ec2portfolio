  var angular = require('angular');

  describe('The controllers' , () => {
    var $httpBackend;
    var $scope;
    var $ControllerConstructor;

    beforeEach(angular.mock.module('pictureApp'));
    beforeEach(angular.mock.inject( function($controller) {
      $scope = {};
      $ControllerConstructor = $controller;
    }));

    it('should be able to make a controller' , () => {

      var pictureController = $ControllerConstructor('PictureController' , {$scope});
      expect(typeof pictureController).toBe('object');
      expect(typeof $scope.getAll).toBe('function');

    });

    describe( 'REST requests', () => {

      it('GET should fetch entires' , () => {

      });
      it('POST should return an object' , () => {

      });

    });

  });
