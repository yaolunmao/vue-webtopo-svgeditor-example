import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import HelloWorld from './components/HelloWorld.vue';

const app = createApp(App);
app.use(createPinia());
app.component('hello-world',HelloWorld)
app.mount('#app')
