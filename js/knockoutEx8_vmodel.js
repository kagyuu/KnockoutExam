/*
 * アプリケーションの View Model.
 */
define(['knockout','jquery'], function(ko,$) {

  return function appViewModel() {
    var self = this;
    
    <!-- Event Binding Example -->
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
    
    <!-- Submit Binding Example -->
    self.msgEvent = ko.observable("");
    self.mouseIn = function (data, event) {
      self.msgEvent("Welcome");
    };
    self.mouseOut = function (data, event) {
      self.msgEvent("");
    };
    
    <!-- Enable/disable Binding Example -->
    self.msgSubmit = ko.observable("");
    self.submit = function (formElement) {
      self.msgSubmit($(formElement).serialize());
    };
    
    <!-- Value Binding Example -->
    <!-- Hasfocus Binding Example -->
    <!-- Checked Binding Example -->
    <!-- Options Binding Example -->
    <!-- SelectedOptions Binding Example -->
    <!-- UniqueNmae Binding Example -->
  };
});
