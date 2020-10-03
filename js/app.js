// All elements
const form = document.querySelector('#film-form');
const secondCardBody = document. querySelectorAll('.card-body')[1];
const clearAllButton = document.querySelector('#clear-films');





// Objects
const ui = new UI();
const storage = new Storage();

// All Events
eventListeners();

function eventListeners(){
    form.addEventListener('submit', addFilm);
    document.addEventListener('DOMContentLoaded', loadAllFilms);
    secondCardBody.addEventListener('click', deleteFilm);
    clearAllButton.addEventListener('click', clearAllFilms);
        
        
}

////// Functions //////

function addFilm(e){
    const title = document.querySelector('#title').value;
    const director = document.querySelector('#director').value;
    const url = document.querySelector('#url').value;

    if (title === '' || director === '' || url === '') {
        ui.displayMessage('danger', 'Fill in the blanks...');
    } else {
        const newFilm = new Film(title, director, url);
        if(storage.add(newFilm)){
            ui.add(newFilm);
            ui.displayMessage('success', 'Film successfully added...');
        }
        else{            
            ui.displayMessage('warning', 'Film already exists');
        }
    }

    // Clear All Inputs
    const inputs = document. querySelectorAll('input');
    ui.clearInputs(...inputs);

    e.preventDefault();
}

function loadAllFilms(){
    let films = storage.get();
    ui.loadAll(films);
}

function deleteFilm(e) {
    if(e.target.id === 'delete-film'){

        const filmElement = e.target.parentElement.parentElement;
        ui.delete(filmElement);

        const filmName = filmElement.children[1].textContent;
        storage.delete(filmName);
        ui.displayMessage('success', 'Film successfully deleted...');
    }
}

function clearAllFilms() {
    if(confirm('Are you sure you want to delete all films?')){
        ui.clearAll();
        storage.clearAll();
    }
}
