/*
 * アプリケーションの View Model.
 */
define(['knockout', 'jquery', 'validation', 'validationEngine'], function(ko,$) {

  return function appViewModel() {
    var self = this;
    self.valRequired = ko.observable("required");
    // Custom
    self.valPhone = ko.observable("04312–777-777");
    self.valUrl = ko.observable('http://myserver.com');
    self.valEmail = ko.observable('username@hostname.com');
    self.valDate = ko.observable('1976-09-16');
    self.valNumber = ko.observable("1.234");
    self.valInteger = ko.observable("1234");
    self.valIpv4 = ko.observable("192.168.0.1");
    self.valOnlyNumberSp = ko.observable("12 345");
    self.valOnlyLetterSp = ko.observable("AB CDE");
    self.valOnlyLetterNumber = ko.observable("AB123");
    self.valFuncCall = ko.observable("HELL");
    self.valConfirm = ko.observable("a@b.com")

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