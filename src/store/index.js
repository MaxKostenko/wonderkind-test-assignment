import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const initState = {
  profiles: {
    '1001': {
      name: 'Lonneke Faber',
      email: 'lonneke.faber@wonderkind.com',
      phone: '06-12345670',
    },
    '1002': {
      name: 'Don Kooijman',
      email: 'kooijmna.don@wonderkind.com',
      phone: '06-12345671',
    },
    '1003': {
      name: 'Amar Muric',
      email: 'amar.muric@wonderkind.com',
      phone: '06-12345672',
    },
    '1004': {
      name: 'Max Kostenko',
      email: 'max.kostenko@still.not.wonderkind.com',
      phone: '06-12345672',
    },
  },
  addresses: {},
  currentProfile: '1001',
  filterValue: ''
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: initState,
  getters,
  mutations,
});
