// Code goes here

var app = angular.module("app",[]);

app.controller("hellocontroller" , function($scope){
  $scope.fname = "Hi";
  $scope.lname = "Hello";

});

app.controller("arraycontroller" , function($scope){
  
  $scope.states = ['NJ' , 'NY' , 'NC' , 'NH'];
  
  $scope.addState = function(){
    
    $scope.states.push($scope.newstate);
    $scope.newstate = "";
  }
  
  $scope.delState = function(state){
    var index = $scope.states.indexOf(state);
    $scope.states.splice(index , 1);
  }
});

app.controller("datacontroller" , function($scope , $http){
  
  $http.get("data.json").success(function(data){
    
    $scope.info = data;
    
  });
})

app.controller("weathercontroller" , function($scope , $http){
    $http.get("user.json").success(function(data){
      $scope.forecast = data;
    })
  $scope.toAdmin = function(userid){
    for(var i in $scope.forecast){
      if($scope.forecast[i].id == userid){
        $scope.forecast[i].site_admin = true;
      }
    }
  }
  
  $scope.delete = function(userid){
    for(var i in $scope.forecast){
      if($scope.forecast[i].id == userid){
        $scope.forecast[i].site_admin = false;
      }
    }
  }
})

app.controller("admincheck", function($scope, $http){
  $http.get("users.json").success(function(data){
    $scope.details = data;
    console.log($scope.details);
  })
})



