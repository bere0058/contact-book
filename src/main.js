import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Contacts from './components/Contacts.vue'
import Contact from './components/Contact.vue'
import Edit from './components/Edit.vue'
import Add from './components/Add.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
      { path: '/', 
        name: Contacts, 
        component: Contacts,
        props: true
      },
      { path: '/contact/:id', 
        name: Contact, 
        component: Contact,
        props: true
      },
      { path: '/edit/:id', 
        name: Edit, 
        component: Edit,
        props: true
      },
      { path: '/add', 
        name: Add, 
        component: Add,
        props: true
      }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
