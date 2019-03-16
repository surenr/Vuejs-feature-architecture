<template>
  <div class="userList">
    <div class="row">
      <h1>Users List</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
        <tr v-for="user in getAllUsers" :key="user.id">
          <td>{{user.name}}</td>
          <td>{{user.description}}</td>
          <td><router-link :to="routerBase + '/' + user.id">Edit</router-link></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  props: {
    routerBase: String,
  },
  computed: {
    getAllUsers() {
      return this.$store.getters['UserCreate/getUserList'] || [];
    },
  },
  created() {
    this.$store.dispatch('UserCreate/getAllUsers');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.userList {
  margin: 0px;
  padding: 0px;
}

.row {
  float: left;
  width: 100%;
}

</style>
