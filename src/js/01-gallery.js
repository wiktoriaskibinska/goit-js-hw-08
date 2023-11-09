// Opisany w dokumentacji
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

function addGalleryItems(items) {
    return items.map(item => `<li>
    <a
    class="gallery__item"
    href="${item.original}">
<img 
  class="gallery__image"
  src="${item.preview}" 
  alt="${item.description}" />
</a>
    </li>`).join("");
}

gallery.innerHTML = addGalleryItems(galleryItems);
// SimpleLightbox Library

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData:"alt",
    captionDelay: 250,
});


console.log(galleryItems);
