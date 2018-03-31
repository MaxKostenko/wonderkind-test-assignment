<template>
<div>
  <h1>{{currentProfile.name}}</h1>
  <div>{{currentProfile.email}}</div>
  <div>{{currentProfile.phone}}</div>
  <div v-if="currentProfile.address">{{currentProfile.address}}</div>
  <div>
    <a href="#" @click.stop.prevent="remove" >Remove</a>
    <router-link
      :to="{ name: 'edit', params: { id: currentProfile.id }}"
    >Edit</router-link>
  </div>

</div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  import {DELETE_PROFILE} from '@/store/mutations.type';

  export default {
    name: 'profile-details',
    computed: {
      ...mapGetters([
        'currentProfile',
      ]),
    },
    methods: {
      ...mapMutations([
        DELETE_PROFILE
      ]),
      remove() {
        this[DELETE_PROFILE]();
      }
    }
  }
</script>
