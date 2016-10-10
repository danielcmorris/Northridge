/// <reference path="../../types/types.d.ts" />
var Application;
(function (Application) {
    var Components;
    (function (Components) {
        var Index = (function () {
            function Index($location, $http) {
                this.$location = $location;
                this.$http = $http;
                this.$insert = ['$location', '$http'];
            }
            return Index;
        }());
        Components.Index = Index;
        app.component("index", {
            controller: Index,
            controllerAs: "vm",
            template: "<h3>HOME</h3>"
        });
    })(Components = Application.Components || (Application.Components = {}));
})(Application || (Application = {}));
//# sourceMappingURL=index.js.map