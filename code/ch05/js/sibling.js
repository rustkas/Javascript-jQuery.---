﻿// Выбираем исходный элемент и находим элементы, смежные с ним.const startItem = document.getElementById('two');const prevItem = startItem.previousSibling;const nextItem = startItem.nextSibling;// Изменяем значения атрибутов class у смежных элементов.setTimeout(function(){	prevItem.className = 'complete';}, 1500);setTimeout(function(){	nextItem.className = 'cool';}, 2500);