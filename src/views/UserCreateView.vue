<template>
  <div class="userCreateView">
    <UserCreate @newUserAdded="handleNewUserAdded" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'userCreateView',
  methods: {
    handleNewUserAdded() {
      console.log('New User Added Emmitted and Hanlded');
      this.$router.push({ name: 'users' });
    },
  },
};
</script>
