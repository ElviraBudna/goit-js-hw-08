import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    `;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
