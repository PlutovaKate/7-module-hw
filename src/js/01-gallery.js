import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')
// console.log(galleryEl)

const galleruMarkup = galleryItems.map(({preview, original, description}) =>{
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
</div>`
}).join('')
    
// console.log(galleruMarkup)

galleryEl.insertAdjacentHTML('beforeend', galleruMarkup)

galleryEl.addEventListener('click', onGalleryClick)

function onGalleryClick (e) {
    e.preventDefault()
    if (e.target.nodeName !== 'IMG') {
        return
    }

    const bigImage = e.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src= '${bigImage}'>
`)

instance.show()

document.addEventListener('keydown', onCloseImage)

function onCloseImage(e) {
    console.log(e)
    if (e.code === 'Escape') {
        instance.close()
    }
}
}


