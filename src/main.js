import { createApp } from 'vue';
import { QCarousel, QCarouselSlide, QImg, QTabs, QTab, QIcon, QRouteTab, Quasar } from 'quasar';
import quasarLang from 'quasar/lang/fr';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import './styles/tailwind.css';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(Quasar, {
    lang: quasarLang,
    components: {
      QCarousel,
      QCarouselSlide,
      QImg,
      QTabs,
      QTab,
      QIcon,
      QRouteTab
    },
  })
  .mount('#app');
