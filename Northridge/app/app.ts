/// <reference path="types/types.d.ts" />

declare module Application { }

var app = angular.module('app',
    ['ngRoute',   'googlechart']).value('googleChartApiConfig', {
            version: '1.1',
            optionalSettings: {
                packages: ['bar'],
                language: 'en'
            }
        })
