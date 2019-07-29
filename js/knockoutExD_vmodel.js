/*
 * アプリケーションの View Model.
 */
define(['knockout'], function(ko) {

	return function appViewModel() {
		var self = this;
		
		self.people = new ko.observableArray([
			[{ value: 'b', label: 'Bertington' },{ value: 'd', label: 'Dentiste' }],
			[{ value: 'c', label: 'Charlesforth' },{ value: 'a', label: 'Angela' }],
			[{ value: 'z', label: 'Zara'}]
		]);

		console.log(self.people());
		self.selected = new ko.observable(self.people()[0][0].value.toString());
	};
});
