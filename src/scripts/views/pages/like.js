import RestaurantsIdb from '../../data/restaurants-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
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
    <h2 class="section-title">Resto Favorite</h2>
<div class="menu__container bd-grid" id="menu_data">
</div>
</section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantsIdb.list();
    const restoContainer = document.querySelector('#menu_data');
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Like;
