app.controller("AuthCtrl", function($scope, AuthFactory, UserFactory){
	$scope.auth = {};
	
	$scope.registerUser = () => {
		// adding username
		//login
		AuthFactory.registerWithEmail($scope.auth).then((didRegister) => {
			$scope.auth.uid = didRegister.uid;
			return UserFactory.addUser($scope.auth);
		}, (error) => {
			console.log("registerWithEmail error", error);
		}).then((registerComplete) => {
			console.log("registerComplete", registerComplete);
		}).catch((error) => {
			console.log("addUser error", error);
		});
	};

	$scope.loginUser = () => {

	};

});