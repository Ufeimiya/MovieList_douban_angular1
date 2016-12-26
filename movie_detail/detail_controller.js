var detail = angular.module('mlist.controllers.movieDetail', ['mlist.model']);
detail.controller('MovieDetailController', function ($scope, $routeParams, mlModel) {
    $scope.name = 'detail';
    // 影片的id
    var subjectId = $routeParams.id;

    mlModel.getSubject(subjectId, function (data) {
        $scope.data = data;
    })
});