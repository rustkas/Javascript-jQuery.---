﻿function checkUsername() {                             // Объявляем функцию
  const elMsg = document.getElementById('feedback');     // Получаем элемент обратной связи
  const elUsername = document.getElementById('username');// Получаем имя, введенное пользователем
  if (elUsername.value.length < 5) {                   // Если имя пользователя слишком короткое
    elMsg.textContent = 'Имя пользователя должно содержать не менее 5 символов'; // Указываем сообщение
  } else {                                              // Иначе
    elMsg.textContent = '';                             // Сбрасываем сообщение
  }
}