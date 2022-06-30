// пишем приложение фильмов

let personalMoveDataBase;

function showFilm(){

        personalMoveDataBase = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: true
    };




    function showMyDataBase(arg){
        if(arg === true){
            console.log(personalMoveDataBase);
        } else {
            console.log("скрыто настройками приватности")
        }
    };

       function filmCounter (){
        personalMoveDataBase.count = +prompt("сколько фильмов вы посмотрели?");
        if(personalMoveDataBase.count > 10 && personalMoveDataBase.privat === true){
            console.log("вы киноман")
        }else if(personalMoveDataBase.count <=10  && personalMoveDataBase.privat === true){
            console.log("маловато фильмов")
        } else if(personalMoveDataBase.count != typeof(Number)  && personalMoveDataBase.privat === true){
            console.log("количество - не цифра")
            
        }
    };

      
    function moviesCasting(){
        let movies = {};
    for(let i = 0; i<2; i++){
            let film = prompt("Какой фильм вы смотрели?")
        let raiting = +prompt("Какую оценку поставите? (1-10)")
        // personalMoveDataBase.count++
        if(film != null && raiting != null && film != '' && raiting != '' && film.length <=10 && raiting <= 10){
            personalMoveDataBase.movies[film] = raiting; 
        }else {
            console.error("пользователь долбоеб")
            alert("ваш результат не валиден, пройдите опрос еще раз")
            i--; 
        }
        }

    };

    function writeYourGenres(){
        for(let i=1; i<=3; i++){
            personalMoveDataBase.genres.push(prompt(`Ваш любимый жанр под номером${i}`))
        }
    };

    showMyDataBase(personalMoveDataBase.privat)
    filmCounter()
    moviesCasting()
    writeYourGenres()

};

showFilm()
        
