import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import VueApexCharts from "vue3-apexcharts";

import './css/style.css'

const app = createApp(App)
// app.components(apexchart, VueApexCharts);
app.use(router)
app.use(VueApexCharts)
app.mount('#app')
let htmlEl=document.querySelector("html");
        htmlEl.setAttribute('dir','rtl');
        htmlEl.setAttribute('lang','fa');