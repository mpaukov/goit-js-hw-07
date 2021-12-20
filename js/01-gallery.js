import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeGalleryItemMarkup = ({ preview, original, description }) => {
  return `
 <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
};

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');

const galleryElements = document.querySelector('.gallery');

document
  .querySelector('link[href="css/styles.css"]')
  .insertAdjacentHTML(
    'beforebegin',
    `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"/>`,
  );
galleryElements.insertAdjacentHTML('beforeend', makeGalleryMarkup);
galleryElements.insertAdjacentHTML(
  'afterend',
  `<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>`,
);

const galleryLinkElements = document.querySelectorAll('.gallery__link');
galleryLinkElements.forEach(galleryLinkElement => {
  galleryLinkElement.addEventListener('click', e => e.preventDefault());
});

galleryElements.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
}
