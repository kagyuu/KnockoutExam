/*
 * アプリケーションの View Model.
 */
define(['knockout','jquery'], function(ko,$) {

  return function appViewModel() {
    var self = this;
    self.lang1 = ko.observable();
    self.lang2 = ko.observable();
  };
});