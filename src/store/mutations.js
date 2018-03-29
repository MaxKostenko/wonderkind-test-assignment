import * as type from './mutations.type';

export default {
  [type.SET_PROFILE] (store, id) {
    store.currentProfile = id;
  }
}
