import Ember from 'ember';

export default Ember.View.extend({

	didInsertElement: function() {
		console.log('inserted');
		// this.$().foundation(); //or
		Ember.$(document).foundation();

		$(".accordion").on("click", ".accordion-navigation", function() {
			$(".accordion-navigation.active").find(".content").slideUp("slow");
			if (!$(this).hasClass("active")) {
				$(this).find(".content").slideToggle("slow");
			}
		});

	}

});
