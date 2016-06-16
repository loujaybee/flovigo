flovigo.directive('fvTaskDetail', function(
    $rootScope,
    TaskService
) {
    return {
        restrict: 'E',
        templateUrl: 'components/task_detail/task_detail.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.task = TaskService.get($scope.$parent._shoji.id);
            
        }
    }
});
