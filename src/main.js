import { createApp } from "vue";
import "./global.css";
import App from "./App.vue";

/* i18n support */
import { createI18n } from "vue-i18n";
const i18n = createI18n({
    locale: "zh-cn",
    fallbackLocale: "en",
    messages: {
        en: {
            message: {
                menu_tools_file: "file",
                menu_tools_edit: "edit",
                menu_tools_view: "view",
                menu_tools_help: "help",
                menu_tabs_translate: "translate",
                menu_tabs_timing: "timing",
                menu_tabs_effect: "effect",
                menu_tabs_check: "check"
            }
        },
        "zh-cn": {
            message: {
                menu_tools_file: "文件",
                menu_tools_edit: "编辑",
                menu_tools_view: "视图",
                menu_tools_help: "帮助",
                menu_tabs_translate: "翻译",
                menu_tabs_timing: "测时",
                menu_tabs_effect: "特效",
                menu_tabs_check: "查验"
            }
        }
    }
});

createApp(App).use(i18n).mount("#app");
