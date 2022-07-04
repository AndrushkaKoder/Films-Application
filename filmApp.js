// пишем приложение фильмов




        personalMoveDataBase = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: true,
        showMyDataBase:  function(){
            // Настройки приватности базы данных
            if(personalMoveDataBase.privat){
                console.log(personalMoveDataBase);
            } else {
                console.log("скрыто настройками приватности")
            }  
        },

        toggleWisibleMyDataBase: function(){
            // флаг приватности
            if(personalMoveDataBase.privat){
                personalMoveDataBase.privat = false
            } else{
                personalMoveDataBase.privat = true
            }
        },

        filmCounter: function(){
            // счетчик фильмов
            personalMoveDataBase.count = +prompt("сколько фильмов вы посмотрели?");
            if(personalMoveDataBase.count > 10 && personalMoveDataBase.privat === true){
                console.log("вы киноман")
            }else if(personalMoveDataBase.count <=10  && personalMoveDataBase.privat === true){
                console.log("маловато фильмов")
            } else if(personalMoveDataBase.count != typeof(Number)  && personalMoveDataBase.privat === true){
                console.log("количество - не цифра")
                
            }
        },

        moviesCasting: function(){
            // вопросы о фильмах и оценки
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
        },

        writeYourGenres: function(){
            // спрашиваем любимые жанры через запятую с помощью split()
            // и пересчитываем через forEach() с выводом в консоль
            for(let i=1; i<2; i++){
                let genre = prompt(`Введите ваши любимые жанры через Запятую`).toLowerCase();
                if(genre == "" || genre == null){
                    console.log("вы ввели неверное значение")
                    i--;
                }  else {
                   personalMoveDataBase.genres = genre.split(", ")
                }
            }
            personalMoveDataBase.genres.forEach((el, i, array)=>{
                console.log(`любимый жанр ${i+1} это ${el}`)
            })
        },
    };


        
















    // function showMyDataBase(arg){
    //     if(arg === true){
    //         console.log(personalMoveDataBase);
    //     } else {
    //         console.log("скрыто настройками приватности")
    //     }
    // };

    //    function filmCounter (){
    //     personalMoveDataBase.count = +prompt("сколько фильмов вы посмотрели?");
    //     if(personalMoveDataBase.count > 10 && personalMoveDataBase.privat === true){
    //         console.log("вы киноман")
    //     }else if(personalMoveDataBase.count <=10  && personalMoveDataBase.privat === true){
    //         console.log("маловато фильмов")
    //     } else if(personalMoveDataBase.count != typeof(Number)  && personalMoveDataBase.privat === true){
    //         console.log("количество - не цифра")
            
    //     }
    // };

      
    // function moviesCasting(){
    //     let movies = {};
    // for(let i = 0; i<2; i++){
    //         let film = prompt("Какой фильм вы смотрели?")
    //     let raiting = +prompt("Какую оценку поставите? (1-10)")
    //     // personalMoveDataBase.count++
    //     if(film != null && raiting != null && film != '' && raiting != '' && film.length <=10 && raiting <= 10){
    //         personalMoveDataBase.movies[film] = raiting; 
    //     }else {
    //         console.error("пользователь долбоеб")
    //         alert("ваш результат не валиден, пройдите опрос еще раз")
    //         i--; 
    //     }
    //     }

    // };

    // function writeYourGenres(){
    //     for(let i=1; i<=3; i++){
    //         personalMoveDataBase.genres.push(prompt(`Ваш любимый жанр под номером${i}`))
    //     }
    // };

    // showMyDataBase(personalMoveDataBase.privat)
    // filmCounter()
    // moviesCasting()
    // writeYourGenres()