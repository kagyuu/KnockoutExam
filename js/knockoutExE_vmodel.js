/*
 * アプリケーションの View Model.
 */
define(['knockout'], function(ko) {

	return function appViewModel() {
		var self = this;
		
		self.list = ko.observableArray([
			{ label : 'a' , list : [ 
				{label : 'a1' , url : 'http://www.a1.com' },
				{label : 'a2' , url : 'http://www.a2.com' },
				{label : 'a3' , url : 'http://www.a3.com' }
			]},
			{ label : 'b' , list : [ 
				{label : 'ba', list : [
					{label : 'ba1' , url : 'http://www.ba1.com' },
					{label : 'ba2' , url : 'http://www.ba2.com' },
					{label : 'ba3' , url : 'http://www.ba3.com' }
				]},
				{label : 'bb', list : [
					{label : 'bb1' , url : 'http://www.bb1.com' },
					{label : 'bb2' , url : 'http://www.bb2.com' },
					{label : 'bb3' , url : 'http://www.bb3.com' }
				]},
				{label : 'bc' , url : 'http://www.bc.com' }
			]},
			{ label : 'c' , list : [ 
				{label : 'cc1' , url : 'http://www.cc1.com' },
				{label : 'cc2' , url : 'http://www.cc2.com' },
				{label : 'cc3' , url : 'http://www.cc3.com' }
			]},
			{label : 'd' , url : 'http://www.dd.com' },
		]);

		console.log(self.list());
	};
});
