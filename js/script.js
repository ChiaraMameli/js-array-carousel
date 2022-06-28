// Genero le immagini da JS
const sources = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

let imageFile = '';

for(let i = 0; i < sources.length; i++){
    imageFile += `<img src="${sources[i]}" alt="landscape${i + 1}"/>`
}

const gallery = document.querySelector('.gallery');

gallery.innerHTML = imageFile;

// Aggancio la classe active
const images = document.querySelectorAll('#carousel img');

let currentActiveIndex = 0;

images[currentActiveIndex].classList.add('active');

// Collego i bottoni
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

//Bottone next
nextButton.addEventListener('click', function(){
    images[currentActiveIndex].classList.remove('active');
    currentActiveIndex++;

    if(currentActiveIndex === images.length) {
        currentActiveIndex = 0;
    }
    images[currentActiveIndex].classList.add('active');
})

// Bottone prev

prevButton.addEventListener('click', function(){
    images[currentActiveIndex].classList.remove('active');
    currentActiveIndex--;

    if(currentActiveIndex < 0) {
        currentActiveIndex = images.length - 1;
    }
    images[currentActiveIndex].classList.add('active');
})
