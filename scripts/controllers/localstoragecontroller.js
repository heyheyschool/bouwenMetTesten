todoApp.controller('localStorageController', function($scope) {

	var localCategories = localStorage.getItem("categories");
    var localComments = localStorage.getItem("comment");
    var localNotes = localStorage.getItem("notes");
    var localPriorities = localStorage.getItem("priorities");

  	console.log("before"+localCategories);
  	console.log("before"+localComments);
  	console.log("before"+localNotes);
  	console.log("before prio"+localPriorities);

  	//Ik overschrijf de array en moet hem toevoegen.

  	if(localCategories != undefined && localCategories.length>0) {

    	//$scope.categories = $scope.categories.concat(localCategories);
    	$scope.categories = JSON.parse(localCategories);
    	console.log($scope.categories);
  	}else{
   		$scope.categories = [{
        	"id": "1",
        	"name": "School",
    	}, {
        	"id": "2",
        	"name": "Werk",
		}]; 
  	}

  	if(localComments != undefined && localComments.length>0) {
    	$scope.comment = JSON.parse(localComments);
    	console.log($scope.comment);
  	}else{
    	$scope.comment = [{
        	"id": "1",
        	"note": "Architectuur boek",
      	}, {
        	"id": "2",
        	"note": "SPA afmaken",
      	}, {
        	"id": "3",
        	"note": "Test",
    	}];
  	}

  	if(localNotes != undefined && localNotes.length>0) {
    	$scope.notes = JSON.parse(localNotes);
    	console.log($scope.notes);
  	}else{
       	$scope.notes = [{
        	"id": "1",
        	checked: false,
        	"name": "Lezen",
        	"wid": "1",
        	"cid": "2",
        	"pid": "1",
    	}, {
        	"id": "2",
        	checked: false,
        	"name": "Studeren",
        	"wid": "2",
        	"cid": "1",
        	"pid": "2",
    	}];
  }

  	if(localPriorities != undefined && localPriorities.length>0) {

    	$scope.priorities = JSON.parse(localPriorities);
    	console.log($scope.priorities);
  	}else{
     	$scope.priorities = [{
        	"id": "1",
       	 	"name": "High",
        	"color": "red",
    	}, {
        	"id": "2",
        	"name": "Medium",
       	 	"color": "blue",
    	}, {
        	"id": "3",
        	"name": "Low",
        	"color": "green",
    	}];
  }


});