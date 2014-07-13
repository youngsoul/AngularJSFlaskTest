/**
 * Created by youngsoul on 7/5/14.
 */
var guidebookConfig = function($routeProvider) {
     $routeProvider
       .when('/', {
         controller: 'ChaptersController',
         templateUrl: '/view/chapters.html'
       })
       .when('/chapter/:chapterId', {
         controller: 'ChaptersController',
         templateUrl: '/view/chapters.html'
       })
       .when('/addNote/:chapterId', {
         controller: 'AddNoteController',
         templateUrl: '/view/addNote.html'
       })
       .when('/deleteNote/:chapterId/:noteId', {
         controller: 'DeleteNoteController',
         templateUrl: '/view/addNote.html'
       })
    ;
};
var Guidebook = angular.module('Guidebook', ['ngRoute']).config(guidebookConfig);