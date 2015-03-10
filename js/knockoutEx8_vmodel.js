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
    };
    
    // Enable/disable Binding Example
    // Value Binding Example
    // Hasfocus Binding Example
    // Checked Binding Example
    // Options Binding Example
    // SelectedOptions Binding Example
    // UniqueNmae Binding Example
  };
});
