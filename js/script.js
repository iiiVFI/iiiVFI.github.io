
"use strict";

document.addEventListener('DOMContentLoaded',()=> { 

const tabs = document.querySelectorAll('.tabheader__item'),
tabsContent = document.querySelectorAll('.tabcontent'),
tabsParent = document.querySelector('.tabheader__items');

function hideTabContent (){

    tabsContent.forEach(item =>{
/*item.classList.add('hide');
item.classList.remove('show');*/
item.style.display = 'none';

    });
tabs.forEach(item =>{  //удаляем класс активностей

item.classList.remove('tabheader__item_active');

});

}

function showTabContent (i=0) {
/*tabsContent[i].classList.add('show');
tabsContent[i].classList.remove('hide');*/
tabsContent[i].style.display = 'block';    
tabs[i].classList.add('tabheader__item_active');

}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click',(event)=>{

const target = event.target; // можно event.target переобределить в опр переменную 

if(target && target.classList.contains('tabheader__item')){

tabs.forEach((item, i)=> { //item - каждый таб, который преребираем 
    if(target == item){ // если элемент на который мы кликнули совпадает с элементом который мы перебираем 

        hideTabContent();
        showTabContent(i);
        

    }


});

}

});




//------------------------------------------------timer

const deadline = '2022-02-23'; //дед лайн 



//---------------PHPMailer

$('form').submit(function(event){

    event.preventDefault();
 
    $.ajax({
       type: "POST",
       url: "php/mail.php",
       data: $(this).serialize()
 
    }).done(function(){
       $(this).find("input").val("");
       alert("Отправлено!");
       $("form").trigger("reset");
    });
    return false;
 });

 $("#inputTel2").mask("+7(999) 999-9999");



function getTime (endtime){

const t = Date.parse(endtime)- Date.parse(new Date()),// получеие кол-во мс
days = Math.floor(t/(1000*3600*24)), // floor - округлить до целого 
hours = Math.floor((t/(1000*3600))%24), 
minutes = Math.floor((t/(1000*60))%60),
seconds = Math.floor((t/1000)%60);

return{   // возвращаем объект 

    'total': t, // общ кол-во мс
    'days': days,
    'hours':hours,
    'minutes':minutes,
    'seconds':seconds,


};

}

function Zero (num){

if( num>=0 && num<10){

    return `0${num}`;

}
else {

return num;

}
    
}



function setClock(selector, endtime){ //установка часов
    const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timeInterval = setInterval(updateClock,1000); // вызываем updateClock каждую секунд
updateClock(); // чтоб не было бага и ф-ия запускалась сразу 
    function updateClock() {

const t = getTime(endtime); // передаем дедлайн 

days.innerHTML = Zero(t.days); // получем дни 
hours.innerHTML = Zero(t.hours);
minutes.innerHTML = Zero(t.minutes);
seconds.innerHTML = Zero(t.seconds);

    }

}
setClock('.buy_timer_timer',deadline);

//------------------------------------------------modal


const modalOpen = document.querySelector('[data-modal]'),
modal = document.querySelector('.modal'),
modalClose = document.querySelector('[data-close]');


modalOpen.addEventListener('click',()=>{

modal.classList.add('show');
modal.classList.remove('hide');

});

modalClose.addEventListener('click',()=>{

    modal.classList.add('hide');
    modal.classList.remove('show');



}); 
});