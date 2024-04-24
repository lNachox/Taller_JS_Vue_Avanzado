import { createApp } from 'vue'
import App from './views/App.vue'

createApp(App).mount('#app')

const app = new Vue({
    el: '#app',
    data() {
      return {
        newName: {
          firstName: '',
          lastName: ''
        },
        names: []
      }
    },
    methods: {
      addName() {
        this.names.push(this.newName);
        this.newName = {
          firstName: '',
          lastName: ''
        };
      },
      updateName(name, index) {
        this.names[index] = name;
      },
      deleteName(index) {
        this.names.splice(index, 1);
      }
    }
  });