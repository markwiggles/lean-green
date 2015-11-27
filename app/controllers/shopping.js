import Ember from 'ember';

export default Ember.Controller.extend({

	sortedProducts: Ember.computed.sort('model', 'sortProperties'),
	sortProperties: ['name:desc'],

	popular: function() {
		var products = this.get('model');
	},

	filterComputed: function() {
		return this.get('model').filter(function(item, index, enumerable) {
			return item.id == 2 || item.id == 3 || item.id == 5;
		});
	}.property('content.@each')




});
