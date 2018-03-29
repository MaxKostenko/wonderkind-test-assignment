<template>
  <div>
    <profile-details></profile-details>
  </div>
</template>

<script>
  import ProfileDetails from "@/components/ProfileDetails";
  import {mapMutations} from 'vuex';
  import {SET_PROFILE} from '@/store/mutations.type';


  export default {
    name: 'contact-list-details',
    components: {
      ProfileDetails
    },
    props: {
      id: {
        type: String,
        required: true,
      }
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
