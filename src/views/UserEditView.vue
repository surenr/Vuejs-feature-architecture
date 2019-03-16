<template>
  <div class="userEditView">
    <UserEdit @userUpdated="handleUserUpdated" :id="id"/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'userEditView',
  props: {
    id: String,
  },
  methods: {
    handleUserUpdated() {
      console.log('Existing User Update Emmitted and Hanlded');
      this.$router.push({ name: 'users' });
    },
  },
};
</script>
