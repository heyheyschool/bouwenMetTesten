todoApp.controller('todoController', function($scope) {

  $scope.deleteItem = function(note) {

    var deleteIndex = -1; 
    var note;
    var commentIndex = -1;
    var categoryIndex = -1;
    $scope.notes.forEach(function(e, i) {
      if(e.name === note.name) {
        deleteIndex = i;
        commentIndex = commentIndex + note.wid;  
        categoryIndex = categoryIndex + note.cid;
      }
    });

    $scope.notes.splice(deleteIndex, 1);
    $scope.comment.splice(commentIndex, 1);
    $scope.categories.splice(categoryIndex, 1);
    localStorage.setItem("notes", JSON.stringify($scope.notes));
    localStorage.setItem("comment", JSON.stringify($scope.comment));
    localStorage.setItem("categories", JSON.stringify($scope.categories));
  };

  $scope.updateItem = function(note, comment, category) {
    note.updating=false;
    var test = -1;
    commentId = test + note.wid; 
    categoryId = test + note.cid;

    console.log("note" + note);
    console.log("comm value" + comment);
    console.log("category value" + category);

    $scope.categories.splice(categoryId, 1, {"id": note.cid, "name": category});
    $scope.comment.splice(commentId, 1, {"id": note.wid, "note": comment});

    //console.log("splice " + $scope.comment.splice(test, 1, {"id": note.wid, "note": comm}));;
    console.log($scope.comment[0], $scope.comment[1], $scope.comment[2]);
    // $scope.comment[test].push({"id": "0", "note": "BLABLA"})
    //console.log($scope.comment.splice(1, test, "id": note.wid "note": comm));

    console.log($scope.notes[0], $scope.comment[0], $scope.categories[0]);

    localStorage.setItem("notes", JSON.stringify($scope.notes));
    localStorage.setItem("comment", JSON.stringify($scope.comment));
    localStorage.setItem("categories", JSON.stringify($scope.categories));
  };
    
  $scope.categories = [{}];
  $scope.notes = [{}];
  $scope.prorities = [{}];
  $scope.comment = [{}];

    $scope.getCategoryByNote = function(note){
        var categories = "";
        angular.forEach($scope.categories, function(value, key) {
            if(note.cid == value.id){
                categories = value.name;
                return false;
            }
        });
        return categories;
    }

    $scope.getColorByNote = function(note){
        var colors = "";
        angular.forEach($scope.prorities, function(value, key) {
            if(note.pid == value.id){
                colors = value.color;
                return false;
            }
        });
        return colors;
    }

    $scope.getPriorityByNote = function(note){
        var priorities = "";
        angular.forEach($scope.priorities, function(value, key) {
            if(note.pid == value.id){
                priorities = value.name;
                return false;
            }
        });
        return priorities;
    }

    $scope.getCommentByNote = function(note){
        var comment = "";
        angular.forEach($scope.comment, function(value, key) {
            if(note.wid == value.id){
                comment = value.note;
                return false;
            }
        });
        return comment;
    }

    $scope.checkPriorityId = function (caseStr) {
        switch (caseStr) {
            case 'High':
                return 1;
                console.log(1);
                break;
            case 'Medium':
                return 2;
                console.log(2);
                break;
            case 'Low':
                return 3;
                console.log(3);
                break;
        }
    };

    $scope.checkPriorityColor = function (caseStr) {
        switch (caseStr) {
            case 'High':
                return "red";
                console.log("red");
                break;
            case 'Medium':
                return "blue";
                console.log("blue");
                break;
            case 'Low':
                return "green";
                console.log("green");
                break;
        }
    };

});
  /*$scope.uniqueItems = function(){
    var test = $scope.items.
    console.log(test);
    uniqueArray = jQuery.unique($scope.items.category);
    console.log(uniqueArray);
  return uniqueArray;

  }


  //gekopieerde code

  /*angular.module('ui.filters').filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});*/



 /* $scope.selected = {};
  
  $scope.category = [{id:"1",name:"work"}];

  $scope.data =  [
    {"id":"113000",
      "values":
          [{$scope.category.id = 1},
           {"note":"Loonstroken", "checked": false}]
    },
    {"id":"113002",
      "values":
          [{"category":"school"},
           {"note":"Blok H", "checked": true}]
    }
    ];
  
  $scope.$watch('selected.id', function(id){
    delete $scope.selected.value;
    angular.forEach($scope.data, function(attr){
      if(attr.id === id){
        $scope.selectedAttr = attr;
      }
    });
      });

*/

/*filter('unique', function() {
  return function(items, category) {
    var newitems =[];
    items.forEach(function(project){
      if(item.category === subProjectName)
        newitems.push(project);
    });
    return newitems;
  };
});*/

/*todoApp.filter('unique', function() {
    return function (arr, field) {
        return _.uniq(arr, function(a) { return a[field]; });
    };
});*/

/*todoApp.filter('unique', function () {
  return function (array) {
    uniqueArray = jQuery.unique(array);
    return uniqueArray;
  };
});*/