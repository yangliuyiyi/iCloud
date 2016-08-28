var reminder = angular.module('reminder', []);
reminder.controller('mainCtrl', ['$scope', function($scope) {
	//主体颜色
	$scope.theme = ['green', 'yellow', 'blue', 'orange', 'purple', 'brow', 'pink'];
	$scope.database = [
			   {
			   	id:1,
			   	name:'新列表1',
			   	theme:'green',
			   	todos:[
			   	  {
			   	  	id:1,
			   	  	name:'aaa',
			   	  	isDone:false
			   	  }, {
			   	  	id:2,
			   	  	name:'aaa',
			   	  	isDone:true
			   	  }
			   	]
			   },
			   {
			   	id:2,
			   	name:'新列表2',
			   	theme:'yellow',
			   	todos:[
			   	  {
			   	  	id:1,
			   	  	name:'aaa',
			   	  	isDone:true
			   	  },
			   	   {
			   	  	id:2,
			   	  	name:'aaa',
			   	  	isDone:true
			   	  }
			   	]
			   },
	];
	$scope.add = function() {
		var l = $scope.database.length;
		var list = {
			id: (l + 1),
			name: '新列表' + (l + 1),
			theme: $scope.theme[l % 7],
			todos: [],
		}
		$scope.database.push(list);

	}
$scope.plus=function(){
	var el=$scope.currentlist.todos;
	console.log(el)
	el.push({	id:1,
			   	  	name:'',
			   	  	isDone:true});
}
	$scope.currentlist = $scope.database[0];
	$scope.setcurrent = function(i) {
		$scope.currentlist = $scope.database[i]
	}

	$scope.cancel = function(e) {
		e.stopPropagation();
	}
	$scope.deletelist = function(id) {
		var arr = [];
		for(var i = 0; i < $scope.database.length; i++) {
			if($scope.database[i].id !== id) {
				arr.push($scope.database[i]);
			}
		}
		$scope.database = arr;
		var index = null;
		for(var i = 0; i < $scope.database.length; i++) {
			if($scope.database[i].id === id + 1) {
				index = i;
			}
		}
		if(index !== 'undefined') {
			$scope.currentlist = $scope.database[i];
		} else {
			$scope.currentlist = null;
		}

	}
}])