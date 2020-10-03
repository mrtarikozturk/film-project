function UI(){
    
}

// Display information message
UI.prototype.displayMessage = function(type, message){

    const cardBody = document.querySelector('.card-body');

    /****************************************************
    <div class="alert alert-primary" role="alert">
    This is a primary alert—check it out!
    </div>
****************************************************/
    const div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.setAttribute('role', 'alert');
    div.textContent = message;

    cardBody.appendChild(div);
    setTimeout(() => {div.remove()}, 2000);
}

// Add Film To UI
UI.prototype.add = function(newFilm){

   const filmList = document.querySelector('#films');

   filmList.innerHTML += `
   <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Film</a></td>
    </tr>   
   `;

/****************************************************
 * 2. way
const tr = document.createElement('tr');
tr.innerHTML = `
<td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
<td>${newFilm.title}</td>
<td>${newFilm.director}</td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Film</a></td>`;
filmList.appendChild(tr);
****************************************************/  
}

// Clear Inputs Value
UI.prototype.clearInputs = function(element1, element2, element3){
    element1.value = '';
    element2.value = '';
    element3.value = '';

}

// Clear Inputs Value Second Way
/****************************************************
 * Second way
  UI.prototype.clearInputs = function(){
    arguments[0].value = '';
    arguments[1].value = '';
    arguments[2].value = '';}
****************************************************/

UI.prototype.loadAll = function (films) {
    films.forEach(film => {
        this.add(film);
    });
}

UI.prototype.delete = function (filmElement) {
    filmElement.remove();
}

UI.prototype.clearAll = function () {
    const filmElements = document.querySelector('#films');

    while(filmElements.firstElementChild !== null){
        filmElements.firstElementChild.remove();
    }

    // second way
    // filmElements.innerHTML ='';
    
    
}
