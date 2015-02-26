/*
 * アプリケーションの View Model.
 */
define(['knockout'], function(ko) {

  return function appViewModel(mdl) {
    // visible
    this.shouldShowMessage = ko.observable(false);
    this.btnShowMessageClick = function() {
      this.shouldShowMessage(!this.shouldShowMessage());
    };
    
    // text
    this.sldValue = ko.observable(0);
    this.txtValue = ko.computed(function() {
        return this.sldValue();
    }, this);
    
    // html
    this.planetNo = ko.observable(0);
    
    this.planet = ko.computed(function() {
      return "<fieldset>"
        + "<legend>" + PLANETS[this.planetNo()].name + "</legend>"
        + "<img src=\"" + PLANETS[this.planetNo()].img + "\" width=\"200px\" height=\"200px\"/>"
        + "</fieldset>";
    }, this);
    this.btnNextPlaent = function() {
	    this.planetNo((this.planetNo() + 1) % PLANETS.length);
    };
    this.btnPrevPlaent = function() {
        var prev = this.planetNo() - 1;
	    this.planetNo(prev > 0 ? prev : PLANETS.length - 1);
    };
  };
});

  var PLANETS = [
	  {name : 'Earth', img : "http://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Earth_Eastern_Hemisphere.jpg/240px-Earth_Eastern_Hemisphere.jpg"},
	  {name : 'Mars', img : "http://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Mars_Valles_Marineris.jpeg/240px-Mars_Valles_Marineris.jpeg"},
	  {name : 'Jupiter', img : "http://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/249px-Jupiter_by_Cassini-Huygens.jpg"},
	  {name : 'Saturn', img : "http://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Saturn-cassini-March-27-2004.jpg/320px-Saturn-cassini-March-27-2004.jpg"},
	  {name : 'Uranus', img : "http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/240px-Uranus2.jpg"},
	  {name : 'Neptune', img : "http://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Neptune.jpg/244px-Neptune.jpg"},
	  {name : 'Mercury', img : "http://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/242px-Mercury_in_color_-_Prockter07_centered.jpg"},
	  {name : 'Venus', img : "http://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"},
  ];
