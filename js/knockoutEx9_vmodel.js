/*
 * アプリケーションの View Model.
 */
define(['knockout'], function(ko) {

	return function appViewModel(colorMdl) {
		var self = this;
		self.setComponent1 = function(component) {
			self.component1 = component;
		}
		self.clickBtn = function() {
			if (self.setComponent1) {
				alert(self.component1.rgb());
			}
		}
	};
});
