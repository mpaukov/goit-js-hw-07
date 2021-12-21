import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
    <img 
    style="display:block"
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
  </a>
  `;
};

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.1/simple-lightbox.css';
document.head.appendChild(link);

const script = document.createElement('script');
script.src =
  'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.1/simple-lightbox.min.js';
document.body.appendChild(script);

const divEl = document.createElement('div');
divEl.classList.add('gallery');
const ulEl = document.querySelector('ul');
ulEl.after(divEl);
document.body.removeChild(ulEl);

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');

const galleryElements = document.querySelector('.gallery');

galleryElements.insertAdjacentHTML('beforeend', makeGalleryMarkup);

const galleryLinkElements = document.querySelectorAll('.gallery__item');
galleryLinkElements.forEach(galleryLinkElement => {
  galleryLinkElement.addEventListener('click', e => e.preventDefault());
});

setTimeout(galleryShow, 250);

function galleryShow() {
  let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
}
