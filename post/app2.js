var app = angular.module('postApp', [ ])
app.controller('LineController', function($scope) {
	$scope.posts = [ ];
	$scope.posting = function(){
		console.log('here');
		$scope.posts.unshift($scope.post.content);
	}
});