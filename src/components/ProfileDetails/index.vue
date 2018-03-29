<template>
<div>
  <h1>{{currentProfile.name}}</h1>
  <div>{{currentProfile.email}}</div>
  <div>{{currentProfile.phone}}</div>
  <div v-if="currentProfile.address">{{currentProfile.address}}</div>
</div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'profile-details',
    computed: {
      ...mapGetters([
        'currentProfile',
        // ...
      ]),
    },
  }
</script>
