<script>
  export default {
    functional: true,
    name: 'profile-list-filter',
    props: {
      profiles: {
        type: Array,
        required: true,
      },
      filter: {
        type: String,
        default: '',
      },
    },

    render(createElement, context) {
      const filteredList = context.props.profiles;
      if (context.props.filter) {
        filteredList.filter(
          profile => profile.fullName.toLowerCase().includes(context.props.filter.toLowerCase())
        );
      }

      const listChild = context.children[0];

      const params = {
        ...listChild.data,
        props: {
          profiles: filteredList
        }
      };

      return createElement(listChild.componentOptions.tag, params, listChild.children);
    }
  }
</script>
