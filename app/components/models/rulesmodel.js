/**
 * Created by vjain3 on 3/8/16.
 */
angular.module('contiv.models.rules', [])
    .factory('RulesModel', ['$http', '$q', function ($http, $q) {
        var URLS = {
            POST: 'http://localhost:9999/api/rules/',
            DELETE: 'http://localhost:9999/api/rules/',
            GET: 'http://localhost:9999/api/rules/'
        };
        return new Collection($http, $q, URLS);
    }]);