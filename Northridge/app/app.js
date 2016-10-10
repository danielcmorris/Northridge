/// <reference path="types/types.d.ts" />
var app = angular.module('app', ['ngRoute', 'googlechart']).value('googleChartApiConfig', {
    version: '1.1',
    optionalSettings: {
        packages: ['bar'],
        language: 'en'
    }
});
//# sourceMappingURL=app.js.map