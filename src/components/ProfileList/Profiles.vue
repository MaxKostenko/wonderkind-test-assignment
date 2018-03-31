<template>
  <div>
    Profile
    <div :key="group.groupTitle" v-for="group in getGroupedList">
      <div>{{group.groupTitle}}</div>
      <router-link
        :key="contact.id"
        v-for="contact in group.list"
        :to="{ name: 'details', params: { id: contact.id }}"
      >
        <div :class="{current: contact.isActive}">
          <b>{{ contact.lastName }}</b>, {{ contact.firstName }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'profile-list',
    props: {
      profiles: {
        type: Array,
        default: function() {
           return []
        }
      }
    },
    computed: {

      getGroupedList(state) {
        return this.profiles.reduce((map, profile) => {
          const groupTitle = profile.lastName[0];
          let collection = map[groupTitle];
          if (!collection) {
            collection = {
              groupTitle: groupTitle,
              list: []
            };
            map[groupTitle] = collection;
          }
          collection.list.push(profile);
          return map;
        }, {});
      }
    }
  }
</script>

<style scoped>
  .current {
    background-color: antiquewhite;
  }
</style>
