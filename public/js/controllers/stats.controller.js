app.controller('StatsController', function ($scope, ScoreFactory, TemplatesFactory) {
    $scope.scores = ScoreFactory;
    $scope.templates = TemplatesFactory;
});