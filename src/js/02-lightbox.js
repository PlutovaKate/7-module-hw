import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')

const galleruMarkup = galleryItems.map(({preview, original, description}) =>{
    return `
    <li class="gallery">
        <a class="gallery__item" href = ${original}>
            <img 
                class = "gallery__image"
                src = ${preview} 
                alt = ${description}
            />
        </a>
    </li>`
    }).join('')
        
    // console.log(galleruMarkup)
    
    galleryEl.insertAdjacentHTML('afterbegin', galleruMarkup)
    
    const lightbox = new SimpleLightbox('.gallery__item', { 
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    })

