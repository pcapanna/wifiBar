/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/main.ts" />
'use strict';
describe('Controller: MainCtrl', function () {
    // load the controller's module
    beforeEach(module('wifindBarApp'));
    var MainCtrl, scope;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));
    //
    // it('should attach a list of awesomeThings to the scope', () => {
    //   expect(scope.awesomeThings.length).toBe(3);
    // });
});
