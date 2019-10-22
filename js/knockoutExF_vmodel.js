/*
 * アプリケーションの View Model.
 */
define(['knockout'], function(ko) {

	return function appViewModel() {
		var self = this;
		
		self.people = new ko.observableArray([
			{ checked: true, label: 'Bertington', distance: '1km' },{ checked: true, label: 'Dentiste', distance: '2km' },
			{ checked: true, label: 'Charlesforth', distance: '3km' },{ checked: false, label: 'Angela', distance: '4km' },
			{ checked: false, label: 'Zara', distance: '23km'}
		]);

		console.log(self.people());
		self.checked_persons = new ko.observableArray();

		// 初期値設定
		self.people().forEach(function(person) {
			if (person.checked) { self.checked_persons.push( person.label ); }
		});
		
		self.rowClick = function(person) {
			if (self.checked_persons.indexOf(person.label) > -1){
				self.checked_persons.remove(person.label);
			} else {
				self.checked_persons.push(person.label);
			}
		};
		
		self.linkClick = function(person) {
			alert(person.label);
		};
	};
});
