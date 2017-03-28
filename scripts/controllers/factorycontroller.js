todoApp.controller("HomeController", function($scope, DataFactory) {
    $scope.data = DataFactory.getAllData();
    $scope.categories = DataFactory.getAllCategories();
});

    todoApp.factory('DataFactory', function() {
    var data = [
        "Op deze website kan je todo lijsten aanmaken",
    	"Ook kan je ze wijzigen en verwijderen",
    	"Op deze pagina zie je afbeeldingen"
    ];

    var categories = [{
        "id": "1",
        "name": "School",
    }, {
        "id": "2",
        "name": "Werk",
    }];

    function getAllData() {
        return data;
    }

    function getAllCategories(){
        return categories; 
    }

    return {
        getAllData: getAllData,
        getAllCategories: getAllCategories
    };

});