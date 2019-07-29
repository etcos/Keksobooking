'use strict';

var ads = [];
var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец',
  'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var TYPES = ['palace', 'flat', 'house', 'bungalo'];
var TIMES = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var blockMap = document.querySelector('.map');

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};


function shuffle (arr) {
  var j;
  var temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }

  return false;
}

var getRandomNumbers = function (min, max) {
  var randomNumbers = [];
  var randomNumber;
  for (var i = 0; i < max; i++) {
    randomNumber = getRandomInt(min, max);

    if (isMatched(randomNumber, randomNumbers)) {
      i--;
    } else {
      randomNumbers[i] = randomNumber;
    }
  }
  return randomNumbers;
};


var generateAds = function () {

  for (var i = 0; i < 8; i++) {
    ads[i] = {
      author: {
        avatar: 'img/avatars/user0' + i + 1 + '.png'
      },
      offer: {
        title: TITLES[i],
        setCoordsAdress: function () {
          this.adress = this.location.x + ', ' + this.location.y;
        },
        adress: '',
        price: getRandomInt(1000, 1000000),
        type: TYPES[getRandomInt(0, TYPES.length - 1)],
        rooms: getRandomInt(1, 5),
        guests: getRandomInt(1, 10),
        setCountGuests: function () {
          this.guests = parseInt(this.guests * this.rooms, 10);
        },
        checkin: TIMES[getRandomInt(0, TYPES.length - 1)],
        checkout: TIMES[getRandomInt(0, TYPES.length - 1)],
        features: FEATURES.slice(0, getRandomInt(1, FEATURES.length - 1)),
        description: '',
        photos: shuffle(PHOTOS.slice(0)),
        location: {
          x: getRandomInt(0, blockMap.offsetWidth),
          y: getRandomInt(130, 630)
        }
      }
    };
    ads[i].offer.setCountGuests();
    ads[i].offer.setCoordsAdress();
    ads[i].offer.setShufflePhotos();
  }

};

generateAds();
console.log(ads);
