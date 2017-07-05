/*(function() {
  describe('Check if data was added', function() {

  	var todocontroller;
	beforeEach(function(){
		module("todoApp.todoController"); 

		inject(function($controller){
			todocontroller = $controller('todoController');
		});
	});

  	var notes = [{
        "id": "1",
        checked: false,
        "name": "Lezen",
        "wid": "1",
        "cid": "1",
        "pid": "1",
    }];

    var categories = [{
        "id": "1",
        "name": "School",
    }]; 

    var priorities = [{
        "id": "1",
        "name": "High",
        "color": "red",
    }];

 	var comment = [{
        "id": "1",
        "note": "Architectuur boek",
    }];

    it('notes should be null', function(){
		todocontroller.deleteItem(notes);
		expect(notes).toBeNull();
    }); 

    console.log(notes);
	
	});

});*/

describe('todoController', function () {

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
     /* it('It should check the priority HIGH', function () {
        var $scope = {};
        var controller = $controller('todoController', { $scope: $scope });
        expect($scope.checkPriorityId("High")).toBe(1);
        });*/

            var notes = [{
        "id": "1",
        checked: false,
        "name": "Lezen",
        "wid": "1",
        "cid": "1",
        "pid": "1",
    }];

    var categories = [{
        "id": "1",
        "name": "School",
    }]; 

    var priorities = [{
        "id": "1",
        "name": "High",
        "color": "red",
    }];

    var comment = [{
        "id": "1",
        "note": "Architectuur boek",
    }];

   /* it('notes should be null', function(){
        var $scope = {};
        var controller = $controller('todoController', { $scope: $scope });
        
        $scope.deleteItem($scope.notes[0]);
        
        expect($scope.notes[0]).toBeNull();
    });*/
    
    });