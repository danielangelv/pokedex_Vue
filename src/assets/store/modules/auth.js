const state = {
    isLoggedIn: false,
  };
  
  const mutations = {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  };
  
  export default {
    state,
    mutations,
  };
  