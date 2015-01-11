/**
 * Created by youngsoul on 1/8/15.
 */

(function() {

    var DirectiveTestController = function($log,$window) {
        var self = this;

        self.title = 'CTRL: Click me to expand';
        self.text = 'CTRL: Hi there folks, I am the content that was hidden but is now shown';

    };

    angular.module('directiveTest').controller('DirectiveTestController', ['$log', '$window',  DirectiveTestController]);

}());