import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import frank from "./components/frank.vue";
import frank2 from "./components/frank2.vue";
import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: frank },
    { path: "/xxx", component: frank2 },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
