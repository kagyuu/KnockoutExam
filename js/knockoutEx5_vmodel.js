/*
 * アプリケーションの View Model.
 */
define(['knockout'], function(ko) {

	return function appViewModel() {
		var self = this;
		
		self.firstName = new ko.observable("");
		self.lastName = new ko.observable("");
	    self.disableAddPerson = ko.computed(function() {
	    	return '' === self.firstName() || '' === self.lastName();
	    });		
		
		self.people = new ko.observableArray([
			{ firstName: 'Bert', lastName: 'Bertington' },
			{ firstName: 'Denise', lastName: 'Dentiste' },
			{ firstName: 'Charles', lastName: 'Charlesforth' }
		]);
		
		self.sortByFirstNameAsc = 1;
		self.sortByFristName = function() {
			self.people.sort(function(o1, o2){
				return o1.firstName.localeCompare(o2.firstName) * self.sortByFirstNameAsc;
			});
			self.sortByFirstNameAsc *= -1;
		};
		
		self.sortByLastNameAsc = 1;
		self.sortByLastName = function() {
			self.people.sort(function(o1, o2){
				return o1.lastName.localeCompare(o2.lastName) * self.sortByLastNameAsc;
			});
			self.sortByLastNameAsc *= -1;
		};
		
		self.addPerson = function() {
			var person = new Object();
			person.firstName = self.firstName();
			person.lastName = self.lastName();
			
			self.firstName("");
			self.lastName("");
			
			self.people.push(person)
		}
		
		self.removePerson = function(person) {
			self.people.remove(person);
		}
	};
});
