import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FcSearch,BiStarFill,PrTimes   } from "oh-vue-icons/icons";
addIcons( FcSearch,BiStarFill,PrTimes  );

import "@/assets/styles.css";
import "@/assets/index.css";


const app = createApp(App);
app.use(createPinia());
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");
