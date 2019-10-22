/*
 * アプリケーションの View Model.
 */
define(['knockout'], function(ko) {

	return function appViewModel() {
		var self = this;
		
		self.people = new ko.observableArray([
			{ value: 'b', label: 'Bertington', distance: '1km' },{ value: 'd', label: 'Dentiste', distance: '2km' },
			{ value: 'c', label: 'Charlesforth', distance: '3km' },{ value: 'a', label: 'Angela', distance: '4km' },
			{ value: 'z', label: 'Zara', distance: '23km'}
		]);

		console.log(self.people());
		self.selected = new ko.observable(self.people()[0]);
		
		self.selectedLabel = ko.computed(function(){
		  return self.selected().label;
		});
		
		self.selected.subscribe(function(){
		  alert("いま選択しなおしたでしょ(`ω')!");
		});
		
	};
});
