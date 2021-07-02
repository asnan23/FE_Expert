import CONFIG from '../../globals/config';
import menuTemplate from './menu_review';

const createRestoDetailTemplate = (resto) => `
<h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src='${CONFIG.BASE_IMAGE_URL + /large/ + resto.pictureId}' alt="${resto.name}" />
  <div class="resto__info">
    <h4>Kategori</h4>
    <p>${resto.categories.map((item) => item.name).join(', ')}</p>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>Address</h4>
    <p>${resto.address} minutes</p>
    <h4>Rating</h4>
    <p>${resto.rating}</p>
  </div>
  <div class="resto__overview">
    <h3>Description</h3>
    <p>${resto.description}</p>
  </div>

  <div class="warpper">
        <input class="radio" id="one" name="group" type="radio" checked>
        <input class="radio" id="two" name="group" type="radio">
        <input class="radio" id="three" name="group" type="radio">
        <div class="tabs">
            <label class="tab" id="one-tab" for="one">Menu</label>
            <label class="tab" id="two-tab" for="two">Review</label>
            <label class="tab" id="three-tab" for="three">Add Review</label>
        </div>
        <div class="panels">
            <div class="panel" id="one-panel">
            ${menuTemplate.getMenu(resto.menus)}
            </div>
            <div class="panel" id="two-panel">           
            ${menuTemplate.getReviews(resto.customerReviews)}
            </div>
            <div class="panel" id="three-panel">
            <form>
              <input id="name" type="text" placeholder="Nama"/>
              <br />
              <textarea id="review" placeholder="Review" rows="5"></textarea>
              <br />
              <button id="kirim" class="submitbutton">submit</button>              
            </form>
            </div>
        </div>
    </div>
`;

const createRestoItemTemplate = (resto) => `<div class="menu__content"><a href="${`/#/detail/${resto.id}`}"><img src="${CONFIG.BASE_IMAGE_URL + /medium/ + resto.pictureId}" alt="${resto.name}" class="menu__img"></a>
<h3 class="menu__name">${resto.name}</h3>
<span class="menu__detail">${resto.description}</span>
<span class="menu__preci">${resto.city}</span>
<span class="button menu__button">${resto.rating}</span>
</div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this reso" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
