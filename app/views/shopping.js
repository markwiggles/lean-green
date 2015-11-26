import Ember from 'ember';

export default Ember.View.extend({

	didInsertElement: function() {
		console.log('inserted modal');
		// this.$().foundation(); //or
		Ember.$(document).foundation();

		$(".accordion").on("click", ".accordion-navigation", function() {
			$(".accordion-navigation.active").find(".content").slideUp("slow");
			if (!$(this).hasClass("active")) {
				$(this).find(".content").slideToggle("slow");
			}
		});

// 		$('#myModal').data('reveal-init', {
//     animation: 'fadeAndPop',
//     animation_speed: 250,
//     close_on_background_click: false,
//     close_on_esc: false,
//     dismiss_modal_class: 'close-reveal-modal',
//     bg_class: 'reveal-modal-bg',
//     bg : $('.reveal-modal-bg'),
//     css : {
//         open : {
//             'opacity': 0,
//             'visibility': 'visible',
//             'display' : 'block'
//         },
//         close : {
//             'opacity': 1,
//             'visibility': 'hidden',
//             'display': 'none'
//         }
//     }
// });

$('#shop-modal').foundation('reveal', 'open');

	}

});
