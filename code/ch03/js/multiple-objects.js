﻿// Создаем шаблон для объектов отелей
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}


// Создаем два объекта отелей
const quayHotel = new Hotel('Тула', 40, 25);
const parkHotel = new Hotel('Гостинница "Калининград"', 120, 77);


// Обновляем HTML-контент страницы
const details1 = `${quayHotel.name}, свободно номеров: ${quayHotel.checkAvailability()}`;
const details2 = `${parkHotel.name}, свободно номеров: ${parkHotel.checkAvailability()}`;

const elHotel1 = document.getElementById('hotel1');
const elHotel2 = document.getElementById('hotel2');


// Обновляем HTML
setTimeout(function(){
	elHotel1.textContent = details1;	// Обновляем HTML со свойством объекта
	elHotel2.textContent = details2;	// Обновляем HTML со свойством объекта
}, 2000);


/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML в строках 21 и 26, но возникает угроза безопасности сайта, как описано в книге
*/