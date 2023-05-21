import App from "./App.vue";
import { createApp, provide, h } from "vue";
import eventBus from "./assets/js/eventBus";

// Plugins
import { registerPlugins } from "./plugins/index";

const app = createApp({
    render: () => h(App),
});

registerPlugins(app);

app.config.globalProperties.$eventBus = eventBus;

app.mount("#app");
