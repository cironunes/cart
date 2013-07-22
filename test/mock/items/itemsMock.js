'use strict';

angular.module('itemsMock', [])
  .value('RESPONSE', [
    {
      "_id": {
        "$oid": ''
      },
      "name": "Mazda",
      "price": 200000,
      "image": "/images/mazda.png",
      "quantity": 0
    },
    {
      "_id": {
        "$oid": ''
      },
      "name": "Truck",
      "price": 100000,
      "image": "/images/truck.png",
      "quantity": 0
    }
  ])
  .value('API_URL', 'https://api.mongolab.com/api/1/databases/frontinbh/collections/items?apiKey=511441a4e4b0bddcedd12959');