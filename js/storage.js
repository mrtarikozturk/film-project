function Storage() {
    
}

Storage.prototype.add = function(newFilm){
    let films = this.get();

    const index = films.findIndex((film) => newFilm.title == film.title);
    
    if(index === -1){
        films.push(newFilm);
        localStorage.setItem('films', JSON.stringify(films));
        return true;
    }
    else{
        return false;
    }
}

Storage.prototype.get = function(){
    let films;
    if(localStorage.getItem('films') === null) films = [];
    else films = JSON.parse(localStorage.getItem('films'));
    return films;

}