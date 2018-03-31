export default {
  profiles(state) {
    return Object.entries(state.profiles).map(([key, val]) => {
      const [firstName, lastName] = val.name.split(' ');
      return {
        id: key,
        firstName,
        lastName,
        fullName: val.name,
        isActive: key === state.currentProfile
      };
    });
  },
  currentProfile(state) {
    const profile = {
      ...state.profiles[state.currentProfile],
      id: state.currentProfile,
    };
    const address = state.addresses[state.currentProfile];
    if(address) {
      profile['address'] = address;
    }
    return profile;
  },
}
