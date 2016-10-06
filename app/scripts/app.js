/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
'use strict';
angular.module('wifindBarApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps',
    'ngMaterial',
    'ui.multiselect'
])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
    })
        .otherwise({
        redirectTo: '/'
    });
})
    .config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCoZvFDIO3KozVbIHKD-sXZL6LMoCGRQ3w',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
});
//# sourceMappingURL=app.js.map