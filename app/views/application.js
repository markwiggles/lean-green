import Ember from 'ember';

export default Ember.View.extend({

	  didInsertElement: function() {
			console.log('inserted');
    // this.$().foundation(); //or
		Ember.$(document).foundation();

		$('.top-bar-section ul li').click(function() {
        $('.top-bar').removeClass('expanded');
    });
  }


});
