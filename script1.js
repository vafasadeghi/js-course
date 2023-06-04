'use strict'

var el1 = document.querySelector('.el1');
var el2 = document.querySelector('.el2');

el1.addEventListener('click', function(e){
    console.log('element 1');
});

el2.addEventListener('click', function(e){
    e.stopPropagation()
    console.log('element2');
})

var link = document.getElementById('web');

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('çlick');
})