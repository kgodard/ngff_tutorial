'use strict';

angular.module('fantasyApp.services.players', ['fantasyApp.services.firebaseRefs'])
  .factory('Players', ['angularFireCollection', 'FireRef',
    function(angularFireCollection, FireRef) {
      return {
        collection: function(cb) {
          return angularFireCollection(FireRef.players(),cb);
        }
      , find: function(playerId) {
          return FireRef.players().child('/'+playerId);
        }
      }
    }])
