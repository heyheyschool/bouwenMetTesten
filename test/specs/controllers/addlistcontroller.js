/*describe('addlistController', function() {
  beforeEach(module('todoApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));*/

describe('addlistController', function () {

  beforeEach(module('todoApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

/*describe("addlistController", function() {

  var controller;
  beforeEach(function(){
    module("todoApp.addlistController"); 

    inject(function($controller){
      controller = $controller('addlistController');

    });
  });*/

    	/*it('should check the priority', function() {
    	var $scope = {};
      var controller = $controller('addlistController', { $scope: $scope });
      	

      	/*$scope.newItem = [{}];

      	$scope.newItem.name = "Test"
      	$scope.newItem.priority = "High"
      	$scope.newItem.name2 = "School"
      	$scope.newItem.comment = "Help me"

      	controller.saveNewItem();*/
/*
      //console.log($scope.notes[0]);
    	var input = 1;
    	var string = "High";
    	var output = $scope.checkPriorityId(string);
		expect(controller('input')).toBe('output');
	});*/
      it('It should check the priority HIGH', function () {
        var $scope = {};
        var controller = $controller('addlistController', { $scope: $scope });
        expect($scope.checkPriorityId("High")).toBe(1);
        });

      it('It should check the priority MEDIUM', function () {
        var $scope = {};
        var controller = $controller('addlistController', { $scope: $scope });
        expect($scope.checkPriorityId("Medium")).toBe(2);
        });

      it('It should check the priority LOW', function () {
        var $scope = {};
        var controller = $controller('addlistController', { $scope: $scope });
        expect($scope.checkPriorityId("Low")).toBe(3);
        });
	
      it('Should test if the scope is truthy', function(){
        var $scope = {};
        var controller = $controller('addlistController', { $scope: $scope });
        expect(controller).toBeTruthy();
    });

      })