import Ember from 'ember';
import config from './config/environment';

// This line imports the Spree Router.
import spreeRouter from 'spree-ember-storefront/router';
import spreeAuthRouter from 'spree-ember-auth/router';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('training');
  this.route('vegucated');
  this.route('reviews');
  this.route('shop');

  spreeRouter(this, config);
  spreeAuthRouter(this, config);

});

export default Router;
