'use strict';

// prendo contenitore immagini
const items = document.querySelector('.items');

// creo array con src da inserire nelle img che andrò a creare
const imgs = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

// inizializzo una variabile per la foto attiva e mostrata in pagina
let itemActive = 0;



// ciclo for per inserimento immagini e contenitori html
for (let i = 0; i < imgs.length; i++) {

  // creo div contenitore per immagine
  const divItem = document.createElement('div');
  // aggiungo la classe active all'elemento che voglio attivo
  if (i === itemActive) {
    divItem.classList.add('active');
  }
  // aggiungo la classe item a tutti i div contenitori per avere lo stile voluto
  divItem.classList.add('item');
  // inserisco i div contenitore immagine dentro il contenitore grande item
  items.append(divItem);

  // credo le img in html
  const img = document.createElement('img');
  // inserisco il contenuto dell'attributo src dentro ogni img
  img.src = `${imgs[i]}`;
  // inserisco l'immagine dentro il suo contenitore
  divItem.append(img);
}

// mi salvo i due div bottone in due costanti
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// creo una sorta di array con i miei div contenitore di immagine
const arrayItems = document.querySelectorAll('.item');

// evento click next
next.addEventListener('click', 
function () {
  // condizione sull'ultima foto che mi riporta alla prima
  if (itemActive === arrayItems.length - 1){
    arrayItems[itemActive].classList.remove('active');
    itemActive = 0;
    arrayItems[itemActive].classList.add('active');
    console.log(`La foto corrente è ${itemActive + 1}`);
  } 
  // condizione di avanzamento in tutti i casi tranne quando sono all'ultima foto
  else if (itemActive < arrayItems.length - 1 ) {
    arrayItems[itemActive].classList.remove('active');
    itemActive++;
    arrayItems[itemActive].classList.add('active');
    console.log(`La foto corrente è ${itemActive + 1}`);
  }
})


// evento click prev
prev.addEventListener('click', 
function () {
  // condizione sulla prima foto che mi riporta all'ultima
  if (itemActive === 0){
    arrayItems[itemActive].classList.remove('active');
    itemActive = arrayItems.length - 1;
    arrayItems[itemActive].classList.add('active');
    console.log(`La foto corrente è ${itemActive + 1}`);
  } 
  // condizione di retrocessione alla foto precedenete tranne nel caso in cui sono alla prima foto
  else if (itemActive > 0 ) {
    arrayItems[itemActive].classList.remove('active');
    itemActive--;
    arrayItems[itemActive].classList.add('active');
    console.log(`La foto corrente è ${itemActive + 1}`);
  }
})


