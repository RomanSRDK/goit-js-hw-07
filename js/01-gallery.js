import { galleryItems } from './gallery-items.js';
// Change code below this line

// Добавляем изображения в нашу HTML разметку
const galleryContainerEl = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`).join('');

galleryContainerEl.insertAdjacentHTML("afterbegin", markup);
// 

const onGalleryImgClick = event => {
    event.preventDefault();

    const {target} = event;

    if (target.nodeName !== "IMG") {
        return;
    };

    const dataSource = target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${dataSource}" />
    `)
    instance.show()
}

galleryContainerEl.addEventListener('click', onGalleryImgClick);