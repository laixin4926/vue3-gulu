import Doc from "./views/Doc.vue";
import Home from "./views/Home.vue";
import { createWebHashHistory, createRouter } from "vue-router";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabDemo from "./components/TabDemo.vue";
import DocDemo from "./components/DocDemo.vue";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", component: DocDemo },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});