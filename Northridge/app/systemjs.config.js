/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        baseURL: '/app/',
        defaultJSExtensions: true,
        // Set paths for third-party libraries as modules
        paths: {
            "npm:*": "node_modules/*"
             
        },
        meta: {
            "npm:angular/angular.js": {
                "format": "global",
                "exports": "angular"
            },
            "npm:npm:/angular-route/angular-route.js": {
                "format": "global",
                "exports": "angular"
            },
            'typescript': {
                "exports": "ts"
            }
        
        },
    });
})(this);
