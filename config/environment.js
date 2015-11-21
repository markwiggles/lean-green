/* jshint node: true */

module.exports = function(environment) {
	var ENV = {
		modulePrefix: 'lean-green',
		environment: environment,
		baseURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			}
		},

		"spree": {
			signinPath: 'signin',
			signupPath: 'signup',
			accountPath: 'account'
		},

		"simple-auth": {
			localStorageKey: 'spree-ember:session',
			authorizer: 'simple-auth-authorizer:spree',
			crossOriginWhitelist: ['http://localhost:3000'],
			authenticationRoute: 'spree.signin',
			routeAfterAuthentication: "spree.products",
			routeIfAlreadyAuthenticated: "spree.products"
		},

		contentSecurityPolicy: {
			'default-src': "'none'",
			'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com/iframe_api https://s.ytimg.com/yts/jsbin/www-widgetapi-vflpCdzwa/www-widgetapi.js use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com",
			'font-src': "'self' data: use.typekit.net https://fonts.gstatic.com https://fonts.googleapis.com",
			'connect-src': "'self' ws://localhost:35729/livereload localhost:3000",
			'img-src': "'self' data: localhost:3000",
			'style-src': "'self' 'unsafe-inline' use.typekit.net  https://fonts.googleapis.com",
			'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com www.youtube.com"
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		}
	};

	ENV["spree"] = {
		apiHost: "http://localhost:3000",
		namespace: "api/ams",
		mount: "/shop",
		productsPath: "products",
		cartPath: "cart",
		checkoutPath: "checkout",
		ordersPath: "orders",
		taxonsPath: "t"
	};



	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.baseURL = '/';
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {
		ENV.baseURL = '/';
	}

	return ENV;
};
