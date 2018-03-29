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
  export default {
    name: 'contact-list-view',
    components: {
      ProfileList
    },
  };
</script>
