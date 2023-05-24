# Тестовое задание на должность Junior Frontend Developer (React) в компании MitraSoft

**Для локального запуска проекта необходимо запустить скрипт npm install, а затем npm start**

## Ключевые технологии, которые необходимо использовать

* React
* React-bootstrap
* React-router
* Axios
* Redux
* Redux-saga
* Git
 

## Описание задачи

Нужно создать сайт с постами, где будут присутствовать 3 страницы (роута):
1. Список постов (главная страница), где будут располагаться все посты.
2. Обо мне, где будет располагаться краткая информация о Вас.
3. Подробности о пользователе (куда необходимо вывести информацию о пользователе и список его постов).

Получить данные необходимо через фейковое api https://jsonplaceholder.typicode.com.

 

## Подробное описание

1. Список постов (главная страница)
    0. Должна содержать список всех постов
    0. Каждый пост состоит из заголовка, текста, аватара автора и списка комментариев
    0. Заголовок и текст брать из api
    0. Аватар должен быть одним изображением для всех пользователей, но при клике на него, должен происходить переход на страницу Подробности о пользователе.
    0. Список комментариев изначально скрыт, доступна лишь кнопка Комментарии
    0. При нажатии на кнопку Комментарии, должен грузиться из api и показываться список комментариев к данному посту. При повторном нажатии список должен скрываться
    0. Комментарий состоит из заголовка(email) и текста
    0. При загрузке данных с сервера нужно отобразить сперва лоадер, а только потом подгруженный контент (создайте дополнительно искусственную задержку в 0.5 секунд чтобы лоадер повисел подольше).
    0. Должен присутствовать хэдер с «меню-бургером». При нажатии на него слева должно всплывать навигационное меню, где будет присутствовать 2 ссылки (Список постов и Обо мне), а также отображаться ваш аватар, имя и почтовый адрес.
2. Обо мне
    1. Здесь всё просто, расскажите немного о себе. Сделайте эту страницу отдельным роутом, сохранив при этом хэдер и «меню-бургер».
3. Подробности о пользователе (переход при нажатии по аватару у поста)
    0. Необходимо создать карточку, куда вывести краткую информацию о пользователе. Информация должна соответствовать автору поста.
    0. Отобразить список постов принадлежащих только данному пользователю, структура самих постов полностью идентична с п.1.2.
    0. Добавить лоадер по аналогии с п.1.8.
    0. Сделать кнопку «Назад», при нажатии на которую произойдет переход на главную страницу.


 

## P.S:

1. В качестве основы можно взять шаблон React App.
2. Вынесите логику работы с сервером в saga-эффекты.
3. Обязательно разбейте логически-независимые элементы страниц на компоненты.
4. На странице Подробности о пользователе данные должны подгружаться даже после обновления этой страницы.
5. Весь интерфейс реализуйте с помощью ui-библиотеки React-bootstrap (используйте компоненты, которые предоставляет эта библиотека).
6. Во время написания кода делайте коммиты почаще (по каждой существенной функции интерфейса).
