/**
 * Created by youngsoul on 1/8/15.
 */
(function() {

    angular.module('directiveTest').directive('expander', function() {
       return {
           restrict: 'EA',
           replace: true,
           transclude: true,
           scope: {title: '=expanderTitle' },
           template: '<div><div class="title" ng-click="toggle()">{{title}}</div>' +
               '<div class="body" ng-show="showMe" ng-transclude></div></div>',
           link: function(scope,element,attrs) {
               scope.showMe = false;

               scope.toggle = function() {
                   scope.showMe = !scope.showMe;
               }
           }
       }
    });

    angular.module('directiveTest').directive('hello', function() {
        return {
            restrict: 'E',
            template: '<div>Hi there from hello directive</div>',
            replace: true
        };
    });

    angular.module('directiveTest').directive('helloTo', function() {
        return {
            restrict: 'E',
            template: '<div>Hi there <span ng-transclude></span> from hello directive</div>',
            replace: true,
            transclude: true
        };
    });

    angular.module('directiveTest').directive('helloTemplate', function() {
        return {
            restrict: 'E',
            templateUrl: '/view/directives/helloTemplate.html',
            replace: true
        };
    });

}());