<template>
  <div>
    <div>
      <profile-list></profile-list>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import ProfileList from '@/components/ProfileList';
  import {mapMutations} from 'vuex';
  import {SET_PROFILE} from '@/store/mutations.type';

  export default {
    name: 'contact-list-view',
    components: {
      ProfileList
    },
    methods: {
      ...mapMutations([
        SET_PROFILE
      ]),
    },
    beforeRouteEnter (to, from, next) {
      next(wm => wm[SET_PROFILE](to.params.id));
    },
    beforeRouteUpdate (to, from, next) {
      this[SET_PROFILE](to.params.id);
      next();
    },
  };
</script>
