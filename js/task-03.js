const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// ==== создание разметки тегов img вложенных в li ==== //

const addGalleryCardMarkup = ({ url, alt }) =>
  `<li class="card" ><img class="card__image" src= ${url} alt='${alt}' width = 100%, height = auto/></li>`;

// ==== Элементы галереи добавляются в DOM ==== //

const galleryEl = document.getElementById('gallery');
const addGalleryCard = images.map(image => {
  return galleryEl.insertAdjacentHTML('afterbegin', addGalleryCardMarkup(image));
});

// ==== минимальное оформление галереи флексбоксами ==== //

galleryEl.style.display = 'flex';
galleryEl.style.flexWrap = 'wrap';
galleryEl.style.alignContent = 'center';
galleryEl.style.listStyle = 'none';
galleryEl.style.padding = '15px';
