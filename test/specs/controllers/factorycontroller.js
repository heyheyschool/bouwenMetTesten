//'use strict';

(function() {
  describe('Datafactory check the data', function() {
    var DataFactory;

    beforeEach(module('todoApp'));
    beforeEach(inject(function (DataFactory) {
      DataFactory = DataFactory;
    }));

    it('DataFactory should exist', function() {
        expect(DataFactory).toBeTruthy();
    });

    it('DataFactory should not be null', function(){
		expect(DataFactory.getAllData()).not.toBeNull();
    });

    it('should check the DataFactory data', function() {
    	var input = [
        "Op deze website kan je todo lijsten aanmaken",
    	"Ook kan je ze wijzigen en verwijderen",
    	"Op deze pagina zie je afbeeldingen"
    	];

    	var output = DataFactory.getAllData();
		expect(DataFactory('input')).toBe('output');
	});

    it('should check the categories data', function(){
        var categories = [{
        "id": "1",
        "name": "School",
            }, {
        "id": "2",
        "name": "Werk",
            }];

        var output = Datafactory.getAllCategories();
        expect(DataFactory('input')).toBe('output');
    })

    it('should check the notes data', function(){
        var notes = [{
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

        var output = DataFactory.getAllNotes();
        expect(DataFactory('input')).toBe('output')
    })

    it('should check the priorities data', function(){
    var priorities = [{
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

        var output = DataFactory.getAllPriorities();
        expect(DataFactory('input')).toBe('output')
    })

    it('should check the comments data', function(){
    var comment = [{
        "id": "1",
        "note": "Architectuur boek",
      }, {
        "id": "2",
        "note": "SPA afmaken",
      }, {
        "id": "3",
        "note": "Test",
    }];

        var output = DataFactory.getAllComments();
        expect(DataFactory('input')).toBe('output')
    })

  });
});