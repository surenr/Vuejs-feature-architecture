import UserCreate from './components/UserCreate.vue';
import UsersList from './components/UserList.vue';

import UserCreateStore from './store/user';

const components = {
  UserCreate,
  UsersList,
  // Add all additional components below
};
const storeModules = {
  UserCreate: UserCreateStore,
  // Add any additional name spaced store modules here.
};

export default {
  install(Vue) {
    console.log('Installing vue components!');
    Object.keys(components)
      .forEach(name => Vue.component(name, components[name]));
  },
  storeModules,
};
