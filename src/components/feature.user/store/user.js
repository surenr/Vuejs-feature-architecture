import {
  getAllUsers, addUser, updateUser, removeUser,
} from '../services/name.service';

const state = {
  userList: [],
};

const getters = {
  getUserList: appState => appState.userList,
  getUserById: appState => id => appState.userList.find(user => user.id === id),
};

const actions = {
  getAllUsers({ commit }) {
    const allUsers = getAllUsers();
    commit('setUserList', allUsers);
  },
  addUser({ dispatch }, { name, description }) {
    console.log('add User called: ', name, description);
    addUser(name, description);
    dispatch('getAllUsers');
  },
  updateUser({ dispatch }, { id, updatedName, updatedDescription }) {
    updateUser(id, updatedName, updatedDescription);
    dispatch('getAllUsers');
  },
  removeUser({ dispatch }, id) {
    removeUser(id);
    dispatch('getAllUsers');
  },

};

const mutations = {
  setUserList: (appState, userList = []) => appState.userList = userList,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
