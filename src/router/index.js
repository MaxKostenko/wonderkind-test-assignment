import Vue from 'vue';
import Router from 'vue-router';
import ContactList from '@/views/ContactList';
import ContactListDetails from '@/views/ContactList/ContactListDetails';
import ContactListEdit from '@/views/ContactList/ContactListEdit';
import ContactAdd from '@/views/ContactAdd';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: ContactList,
      props: true,
      children: [
        {
          path: '/contact/:id',
          name: 'details',
          component: ContactListDetails,
          props: true,
        },
        {
          path: '/contact/edit/:id',
          name: 'edit',
          component: ContactListEdit,
          props: true,
        }

      ],
    },
    {
      path: '/add',
      name: 'add',
      component: ContactAdd
    }
  ],
});
