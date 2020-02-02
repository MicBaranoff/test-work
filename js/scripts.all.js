(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){

    $('.burger').on('click',function(){
        $('header').toggleClass('active');
    })

    $('.works-tabs-box').fadeOut();
    $('.works-tabs-box:nth-child(1)').fadeIn();
    $('.works-tabs-nav > a').on('click' , function() {
        $('.works-tabs-nav > a').removeClass('active');
       $(this).addClass('active');
       let num = $(this).index() + 1;
       $('.works-tabs-box').fadeOut();
       $('.works-tabs-box:nth-child('+num +')').fadeIn();
    });

    $('.reviews_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        arrows: false,
        fade: false,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $.getJSON('https://pokeapi.co/api/v2/pokemon/', function () {
        }).done(function (data) {
            // console.log(data);
            for (var i=0; i<10; i++) {
                console.log(data.results[i]);
            }
        }).fail(function(){
            console.log('ERROR! CAN\'T GET POKEMON\'S DATA :(');
        });

  

    

});


},{}]},{},[1]);
