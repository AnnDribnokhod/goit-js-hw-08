// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
console.log(SimpleLightbox);
const getGallerySliderList = document.querySelector('.gallery');

function createGallerySliderItems(galleryItemsArray) {
  return galleryItemsArray
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>`
    )
    .join('');
}
getGallerySliderList.insertAdjacentHTML(
  'beforeend',
  createGallerySliderItems(galleryItems)
);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  overlayOpacity: '1',
  captionDelay: 250,
});

gallery.on('show.simplelightbox', function () {});
