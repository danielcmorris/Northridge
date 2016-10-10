/// <reference path="../../types/types.d.ts" />
var Application;
(function (Application) {
    var Components;
    (function (Components) {
        var login = (function () {
            function login($location) {
                this.$location = $location;
                this.$insert = ['$location'];
                console.log("LOGIN");
            }
            login.prototype.Login = function () {
                this.$location.path("/patient-list");
            };
            return login;
        }());
        app.component("login", {
            controller: login,
            controllerAs: "vm",
            templateUrl: "app/pages/login/login.html?v=" + new Date(),
        });
    })(Components = Application.Components || (Application.Components = {}));
})(Application || (Application = {}));
//# sourceMappingURL=login.js.map