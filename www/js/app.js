//setup angular
var app = angular.module('scotch-todo', ['ionic', 'LocalStorageModule']);

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('scotch-todo');
});

app.controller('main', function ($scope, $ionicModal, localStorageService) { //store the entities name in a variable var taskData = 'task';

    //initialize the tasks scope with empty array
    $scope.tasks = [];

    //initialize the task scope with empty object
    $scope.task = {};

    //configure the ionic modal before use
    $ionicModal.fromTemplateUrl('new-task-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.newTaskModal = modal;
    });

    $scope.getTasks = function () {
        //fetches task from local storage
        ...
    }
    $scope.createTask = function () {
        //creates a new task
        ...
    }
    $scope.removeTask = function () {
        //removes a task
        ...
    }
    $scope.completeTask = function () {
        //updates a task as completed
        ...
    }
})