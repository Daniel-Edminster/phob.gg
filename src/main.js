import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router/index"
import { marked } from 'marked';

const markedMixin = {
  methods: {
    marked: function(markdown) {
      return marked(markdown);
    }
  }
}

createApp(App).mixin(markedMixin).use(router).mount('#app')
