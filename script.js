/*
* Faire que l'on puisse choisir l'image principale parmis
* celles de la gallerie
*/

// Récupère l'image principale
const mainImg = document.querySelector('#main-img');

// Récupère toutes les images de la galerie
const galleryImages = document.querySelectorAll('.gallery img');

// Ajoute un événement à chaque image de la galerie
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        // Change la source de l'image principale
        mainImg.src = img.src;
    });
});