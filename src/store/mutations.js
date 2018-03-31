import * as type from './mutations.type';
import Vue from 'vue';

export default {
  [type.SET_PROFILE] (store, id) {
    store.currentProfile = id;
  },

  [type.DELETE_PROFILE] (store) {
    Vue.delete(store.profiles, store.currentProfile);
    store.currentProfile = Object.keys(store.profiles)[0];
  }
}
