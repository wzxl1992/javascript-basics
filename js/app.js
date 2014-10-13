"use strict";

var name ='Xuli';
var fruits = ['apple','pear','kiwi','banana'];




//function onLoaded() {
//    var msgElem = document.getElementById('message');
//    msgElem.innerHTML = 'Hello ' + name;
//}
function sayHello(){
    alert('Hello ' + name);
}

document.addEventListener('DOMContentLoaded', function(){
    var idx;
    var fruitListElm = document.getElementById('fruit-list');
    var fruitLi;
    var animalSound = document.getElementById('animal-sound');

    var msgElem = document.getElementById('message');
    msgElem.innerHTML = 'Hello ' + name;

    for (idx = 0; idx<fruits.length; ++idx) {
        console.log(fruits[idx]);

        fruitLi = document.createElement('li');
        fruitLi.innerHTML = fruits[idx];
        fruitListElm.appendChild(fruitLi);

    }

    var animalPic = document.getElementById('animal-picture');
    animalPic.addEventListener('click',function() {
        msgElem.innerHTML = 'bark';
        animalSound.play();
    });

    animalSound.addEventListener('ended', function() {
        msgElem.innerHTML = '&nbsp;' ;
    });

    window.setInterval(function() {
        document.getElementById('clock').innerHTML = new Date().toLocaleString();
    }, 1000);
});

