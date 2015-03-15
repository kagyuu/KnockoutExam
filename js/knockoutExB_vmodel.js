/*
 * アプリケーションの View Model.
 */
define(['knockout', 'jquery', 'validation', 'validationEngine'], function(ko,$) {

  return function appViewModel() {
    var self = this;
    self.name = ko.observable();
	self.submitFunc = function (formElement) {
		if ($(formElement).validationEngine('validate') ) {
			alert('Form is valid');
			return false;
		}
		
		alert('Form is invalid');
		return false;
	};
  };
});