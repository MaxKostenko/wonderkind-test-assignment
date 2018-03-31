import Vue from 'vue';
import Router from 'vue-router';
import ContactList from '@/views/ContactList';
import ContactListDetails from '@/views/ContactList/ContactListDetails';
import ContactListEdit from '@/views/ContactList/ContactListEdit';
import ContactAdd from '@/views/ContactAdd';
import store from '@/store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: (to) => {
        return `/profile/${store.state.currentProfile}`;
      }
    },
    {
      path: '/profile/:id',
      component: ContactList,
      props: true,
      children: [
        {
          path: '/',
          name: 'details',
          component: ContactListDetails,
        },
        {
          path: '/edit',
          name: 'edit',
          component: ContactListEdit,
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
