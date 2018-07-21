var app = angular.module('myApp', []);

app.directive('helloWorldA', function() {
    return {
        restrict: 'A',
        replace: 'true',
        template: '<h3>Directive with restrict A (Attribute)</h3>'
    };
});

app.directive('helloWorldE', function() {
    return {
        restrict: 'E',
        replace: 'true',
        template: '<h3>Directive with restrict E (Element)</h3>'
    };
});

app.directive('helloWorldC', function() {
    return {
        restrict: 'C',
        replace: 'true',
        template: '<h3>Directive with restrict C (Class)</h3>'
    };
});

app.directive('helloWorldM', function() {
    return {
        restrict: 'M',
        replace: 'true',
        template: '<h3>Directive with restrict M (Comment)</h3>'
    };
});

app.directive('helloWorldWithColor', function() {
    return {
        restrict: 'AE',
        replace: true,
        template: '<p style="background-color:{{color}}">Hello World With Custom Color',
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                elem.css('background-color', 'white');
                scope.$apply(function() {
                    scope.color = "white";
                });
            });
            elem.bind('mouseover', function() {
                elem.css('cursor', 'pointer');
            });
        }
    };
});

app.directive('helloWorldWithAttr', function() {
    return {
        scope: {
            model: '=model',
            param: '&param',
            name: '@name'
        }, // isolated scope
        // scope: true,  // use a child scope that inherits from parent
        restrict: 'AE',
        replace: true,
        template: '<p>Hello World With Attributes\nModel={{model}}, Param={{call(param)}}, Name={{name}}',
        link: function(scope, elem, attrs) {
            scope.model = attrs.model;
            var param1 = attrs.param;
            scope.call = function (data) {
                return param1 ;
            }

        }
    };
});
