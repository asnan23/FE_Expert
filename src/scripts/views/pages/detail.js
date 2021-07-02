import UrlParser from '../../routes/url-parser';
import Restaurants from '../../data/restaurant-service';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import menuTemplate from '../templates/menu_review';

const Detail = {
  async render() {
    return `
    <section class="home" id="home">
    <div class="hero">
        <div class="hero__inner">
            <h1 class="hero__title">Makanlah hari ini</h1>
            <p class="hero__tagline">Minggu depan kami sajikan pengalaman berbeda</p>
        </div>
      </div>
    </section>
    <section class="section bd-container" id="menu">
      <div class="favorite__container  bd-grid" id="favoriteku">

      </div>
    </section>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restauran = await Restaurants.retrieve(url.id);
    const restoranContainer = document.querySelector('#favoriteku');
    restoranContainer.innerHTML = createRestoDetailTemplate(restauran);

    const submitButton = document.querySelector('#kirim');
    submitButton.addEventListener('click', async () => {
      const name = document.querySelector('#name').value;
      const review = document.querySelector('#review').value;
      await Restaurants.postReview({ id: restauran.id, name, review })
        .then((res) => {
          if (res.customerReviews) {
            const $reviewContainer = document.querySelector('#two-panel');
            $reviewContainer.innerHTML = menuTemplate.getReviews(res.customerReviews);
          }
        });
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: restauran.id,
        name: restauran.name,
        description: restauran.description,
        city: restauran.city,
        address: restauran.address,
        pictureId: restauran.pictureId,
        categories: restauran.categories,
        menus: restauran.menus,
        rating: restauran.rating,
        customerReviews: restauran.customerReviews,
      },
    });
  },
};

export default Detail;
