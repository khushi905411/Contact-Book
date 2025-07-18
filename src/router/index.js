import { createRouter, createWebHistory } from 'vue-router';
import ContactList from '../views/ContactList.vue';
import AddContact from '../views/AddContact.vue';
import EditContact from '../views/EditContact.vue';
import ContactDetails from '../views/ContactDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ContactList,
  },
  {
    path: '/add',
    name: 'AddContact',
    component: AddContact,
  },
  {
    path: '/edit/:id',
    name: 'EditContact',
    component: EditContact,
  },
  {
    path: '/contact/:id',
    name: 'ContactDetails',
    component: ContactDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
