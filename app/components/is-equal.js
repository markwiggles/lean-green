import Ember from 'ember';

export default Ember.Component.extend({

	isEqual: function() {
		//check if param1 cantains param2 and return boolean
		return this.get('param1').toString().toLowerCase().indexOf(this.get('param2')) > -1;
	}.property('param1', 'param2')
});
