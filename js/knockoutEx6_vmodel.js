/*
 * アプリケーションの View Model.
 */
define(['knockout'], function(ko) {

	return function appViewModel() {
		var self = this;
		
		self.firstName = new ko.observable("");
		self.lastName = new ko.observable("");
		self.id = new ko.observable("");
		self.dept = new ko.observable("");
	    self.disableAddPerson = ko.computed(function() {
	    	return '' === self.firstName() || '' === self.lastName() || '' === self.id() || '' === self.dept();
	    });		
		
		self.people = new ko.observableArray([
			{ firstName: 'Bert', lastName: 'Bertington' , work : {id : 9743823, dept : 'Account'}},
			{ firstName: 'Denise', lastName: 'Dentiste' , work : {id : 4930225, dept : 'Sales'}},
			{ firstName: 'Charles', lastName: 'Charlesforth' , work : {id : 9922334, dept : 'Robotech'}}
		]);
		
		self.addPerson = function() {
			var person = new Object();
			person.firstName = self.firstName();
			person.lastName = self.lastName();
			person.work = new Object();
			person.work.id = self.id();
			person.work.dept = self.dept();
			
			self.firstName("");
			self.lastName("");
			self.id("");
			self.dept("");
			
			self.people.push(person)
		}
		
		self.removePerson = function(person) {
			self.people.remove(person);
		}
	};
});
