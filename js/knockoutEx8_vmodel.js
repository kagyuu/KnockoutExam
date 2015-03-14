/*
 * アプリケーションの View Model.
 */
define(['knockout','jquery'], function(ko,$) {

  return function appViewModel() {
    var self = this;
    
    // Click Binding Example
    self.msgClick = ko.observable("");
    self.divClick = function (data, event) {
      self.msgClick("div " + (event.shiftKey ? "+Shift" : ""));
    };
    self.aClick = function (data, event) {
      self.msgClick("link " + (event.shiftKey ? "+Shift" : ""));
    };
    self.btnClick = function (data, event) {
      self.msgClick("button " + (event.shiftKey ? "+Shift" : ""));
    };
    
    // Event Binding Example
    self.msgEvent = ko.observable("");
    self.mouseIn = function (data, event) {
      self.msgEvent("Welcome");
    };
    self.mouseOut = function (data, event) {
      self.msgEvent("");
    };
    
    // Submit Binding Example
    self.msgSubmit = ko.observable("");
    self.submit = function (formElement) {
      self.msgSubmit($(formElement).serialize());
      return false;
    };
    
    // Enable/disable Binding Example
    self.acceptCheck = ko.observable("decline");
    
    // Value Binding Example
    self.txtValue1 = ko.observable("");
    self.txtLength1 = ko.computed(function(){
	   return self.txtValue1().length; 
    });
    self.txtValue2 = ko.observable("");
    self.txtLength2 = ko.computed(function(){
	   return self.txtValue2().length; 
    });
    
    // Text Input Binding Examle
    self.txtValue3 = ko.observable("");
    self.txtLength3 = ko.computed(function(){
	   return self.txtValue3().length; 
    });
    
    // Hasfocus Binding Example
    self.focusValue = ko.observable("");
    self.isFocused = ko.observable(false);
    self.focusClick = function(){
    	if (self.focusValue() === '') {
	    	self.isFocused(true);
    	} else {
	    	alert(self.focusValue());
    	}
    }
    
    // Checked Binding Example
    self.chkOk = ko.observable(false);
    self.chkFruits = ko.observableArray();
    self.radEat = ko.observable("Juce");
    self.chkOrder = function() {
	    $( "#dialog" )
	    	.dialog( "option" , { title : self.radEat() })
	    	.dialog( "open" );
    }
    
    // Options/SelectOptions Binding Example
	self.selFruitsOptions = ko.observableArray(['Apple','Banana','Grape']);
	self.selFruits = ko.observableArray(['Apple']);
	self.selEatOptions = ko.observableArray(['Juce','Cocktail','Pie']);
	self.selEat = ko.observable();
	self.selOrder = function() {
	    $( "#dialog2" )
	    	.dialog( "option" , { title : self.selEat() })
	    	.dialog( "open" );
	}
  };
});
