//setup angular
var app = angular.module('scotch-todo', ['ionic', 'LocalStorageModule']);

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('scotch-todo');
});