<template>
  <div>
    <profiles-filter
      :profiles="profiles"
      :filter="''"
    >
      <profiles></profiles>
    </profiles-filter>

  </div>
</template>

<script>
  import Profiles from "@/components/ProfileList/Profiles";
  import ProfilesFilter from "@/components/ProfileList/ProfilesFilter";
  import {mapGetters} from 'vuex';

  export default {
    name: 'contact-list',
    components: {
      Profiles,
      ProfilesFilter,
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
