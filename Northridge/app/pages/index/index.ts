/// <reference path="../../types/types.d.ts" />
module Application.Components {
    interface IBook extends Application.Library.Types.IBook { }
    export class Index {
         
        $insert = ['$location', '$http'];
        constructor(private $location, private $http) {



        }
         

    } 
    app.component("index", {
        controller: Index,
        controllerAs: "vm",
        template: "<h3>HOME</h3>"
       // templateUrl: "app/pages/index/preview/preview.html?v=" + new Date(),
    })
}