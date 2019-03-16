<template>
  <div class="userListView">
    <p>Please <router-link to="/users/create">Click Here</router-link> to create new users </p>
    <UsersList :routerBase="'/users/edit'" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'userListView',
};
</script>
