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

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css';
document.head.appendChild(link);

const script = document.createElement('script');
script.src =
  'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';
document.body.appendChild(script);

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');

const galleryElements = document.querySelector('.gallery');

galleryElements.insertAdjacentHTML('beforeend', makeGalleryMarkup);

const galleryLinkElements = document.querySelectorAll('.gallery__link');
galleryLinkElements.forEach(galleryLinkElement => {
  galleryLinkElement.addEventListener('click', e => e.preventDefault());
});

galleryElements.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  modalShow(event.target.dataset.source);
}

function modalShow(src) {
  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${src}" style="height:100vh"></img>
    </div>
`);
  instance.show(() => {
    window.addEventListener('keydown', function onEscClick(event) {
      if (event.code === 'Escape') {
        instance.close(() => {
          window.removeEventListener('keydown', onEscClick);
        });
      }
    });
  });
}
