// All elements
const form = document.querySelector('#film-form');

// Objects
const ui = new UI();
const storage = new Storage();

// All Events
eventListeners();

function eventListeners(){
    form.addEventListener('submit', addFilm);
}

////// Functions //////

function addFilm(e){
    const title = document.querySelector('#title').value;
    const director = document.querySelector('#director').value;
    const url = document.querySelector('#url').value;
    // const inputs = document.querySelectorAll('form input');

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


    e.preventDefault();
}
