/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Жмурки",
        "Бумер",
        "Брат"
    ]
};

// удаляем баннеры
let adv = document.querySelectorAll(".promo__adv img");
adv.forEach(el => {
    el.remove();
});

// меняем жанры с комедии на драму
document.querySelector(".promo__genre").textContent = "Драма";

// меняем постер
let poster = document.querySelector(".promo__bg");
poster.style.background = "url(img/bg.jpg)";



// удаляем дефолтные значения из списка кино
let moviesList = document.querySelector(".promo__interactive-list");
moviesList.innerHTML = "";


// сортируем массив фильмов
movieDB.movies.sort();

// выводим массив на страницу
movieDB.movies.forEach((el, i)=>{
    moviesList.innerHTML += `<li class = "promo__interactive-item">${i+1}:  ${el}<div class="delete"></div></li>`;
});






