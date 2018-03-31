<template>
  <div>
    <filter-field v-model="filter"></filter-field>
    <profiles-filter
      :profiles="profiles"
      :filter="filter"
    >
      <profiles></profiles>
    </profiles-filter>

  </div>
</template>

<script>
  import Profiles from "@/components/ProfileList/Profiles";
  import ProfilesFilter from "@/components/ProfileList/ProfilesFilter";
  import FilterField from "@/components/ProfileList/FilterField";
  import {mapGetters} from 'vuex';

  export default {
    name: 'contact-list',
    components: {
      Profiles,
      ProfilesFilter,
      FilterField,
    },
    data() {
      return {
        filter: ''
      }
    },
    computed: {
      ...mapGetters([
        'profiles',
        // ...
      ]),
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
