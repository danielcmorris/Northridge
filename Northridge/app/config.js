/// <reference path="types/types.d.ts" />
var Application;
(function (Application) {
    var Config;
    (function (Config) {
        var Session = (function () {
            function Session() {
                this.sessionId = "NONE";
            }
            return Session;
        }());
        Config.Session = Session;
        var version = (function () {
            function version() {
                this.author = "Morris Development";
                this.supportContact = "dmorris@morrisdev.com";
                this.apiKey = "dswejkdfkui8yoihkjnlj98776tsad87sd9809fdijsnekjjdsoidjs";
                this.number = "1.0" + Math.random();
            }
            return version;
        }());
        Config.version = version;
        var routes = (function () {
            function routes($routeProvider, $locationProvider) {
                this.$routeProvider = $routeProvider;
                this.$locationProvider = $locationProvider;
                this.$insert = ['$routeProvider', '$locationProvider'];
                this.$routeProvider
                    .when('/', {
                    template: '<login></login>'
                })
                    .when('/outcomes-report/:id', {
                    template: '<outcomes-report></outcomes-report>'
                })
                    .when('/login', {
                    template: '<login></login>'
                }).when('/patient-list', {
                    template: '<patient-list></patient-list>'
                })
                    .when('/patient', {
                    template: '<patient></patient>'
                })
                    .when('/patient-list/:id', {
                    template: '<patient></patient>'
                })
                    .when('/patient-list/:id/outcomes-report', {
                    template: '<outcomes-report></outcomes-report>'
                })
                    .otherwise({ redirectTo: '/login' });
                ;
                this.$locationProvider.html5Mode(false);
            }
            return routes;
        }());
        Config.routes = routes;
        app.config(routes);
        var httpConfig = (function () {
            function httpConfig($httpProvider) {
                this.$httpProvider = $httpProvider;
                this.$insert = ["$httpProvider"];
                this.$httpProvider.defaults.useXDomain = true;
                this.$httpProvider.defaults.withCredentials = false;
                delete this.$httpProvider.defaults.headers.common["X-Requested-With"];
                //this.$httpProvider.defaults.headers.common["Accept"] = "application/json";
                //  this.$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
            }
            return httpConfig;
        }());
        Config.httpConfig = httpConfig;
        app.config(httpConfig);
        var templates = (function () {
            function templates() {
                /* PAGES */
                this.index = "app/pages/index/index.html";
                this.login = "app/pages/login/login.html";
                this.outcomesReport = "app/pages/outcomes-report/outcomes-report.html";
                var v = new version();
                this.login += "?v=" + v.number;
            }
            return templates;
        }());
        Config.templates = templates;
        app.service("templates", templates);
    })(Config = Application.Config || (Application.Config = {}));
})(Application || (Application = {}));
//# sourceMappingURL=config.js.map