export default function() {

	var durationTime = 500;

	this.transition(
		this.matchSelector('.navigation-content'),
		this.use('crossFade')
	);

	// this.transition(
	// 	this.matchSelector('.shopping-content'),
	// 	this.use('toRight')
	// );


	// this.transition(
  //   this.fromRoute('spree.products.show'),
  //   this.toRoute('spree.cart'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // );


}
