import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

Ember.deprecate = function() {};
Ember.warn = function(i) {};


App = Ember.Application.extend({
	modulePrefix: config.modulePrefix,
	podModulePrefix: config.podModulePrefix,
	Resolver: Resolver,

	'ember-cli-foundation-sass': {
		'modernizr': true,
		'fastclick': true,
		'foundationJs': 'all'
	}
});

loadInitializers(App, config.modulePrefix);

export default App;
