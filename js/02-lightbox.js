import { galleryItems } from './gallery-items.js';
// Change code below this line

// Добавляем изображения в нашу HTML разметку
const galleryContainerEl = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join('');

galleryContainerEl.insertAdjacentHTML("afterbegin", markup);
// 

new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
});