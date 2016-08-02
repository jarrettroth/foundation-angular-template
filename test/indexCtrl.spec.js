describe('THE INDEX CONTROLLER...', function() {
    var controller;
    var $scope;
    beforeEach(function(){ module('app') });

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        controller = $controller('indexCtrl', {$scope: $scope});
    }));

    //This test will break at first, alter line 3 in indexCtrl.js to make it pass.
    it('should greet you by name', function() {
        //pretend your name is angular
        expect($scope.name).toEqual('angular');
    });

});