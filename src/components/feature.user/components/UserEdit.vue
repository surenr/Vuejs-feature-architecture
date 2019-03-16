<template>
  <div class="user.edit.form">
    <h1>Edit Existing User</h1>
    <div class="form">
      <div class="row">
        <div class="label">Full Name</div>
        <div class="seperator">:</div>
        <div class="value">
          <input v-model="form.name" class="input" type="text" placeholder="Full name">
        </div>
      </div>
      <div class="row">&nbsp;</div>
      <div class="row">
        <div class="label">Description</div>
        <div class="seperator">:</div>
        <div class="value">
          <textarea cols="30" rows="10" placeholder="Message" v-model="form.description" />
        </div>
      </div>
      <div class="row">
        <div class="label">&nbsp;</div>
        <div class="seperator">&nbsp;</div>
        <div class="value">
          <button @click="submitForm()">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserEditForm',
  props: {
    id: String,
  },
  data() {
    return {
      form: {
        name: '',
        description: '',
      },
    };
  },
  methods: {
    submitForm() {
      this.$store.dispatch('UserCreate/updateUser', { id: this.id, updatedName: this.form.name, updatedDescription: this.form.description });
      this.$emit('userUpdated');
    },
  },

  created() {
    const userInfo = this.$store.getters['UserCreate/getUserById'](this.id);
    if (!userInfo) {
      console.error('No user information is given: ', userInfo);
    } else {
      this.form.name = userInfo.name;
      this.form.description = userInfo.description;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
form {
  margin: 0px;
  padding: 0px;
}
.form {
  float: left;
  width: 50%;
  padding:10px;
  border: 1px solid #ff0000;
  position: relative;
  left: 25%
}

.row {
  float: left;
  width: 100%;
}
.label {
  float: left;
  width:49%;
  text-align: right;
  font-weight: bold;
  font-size: 14px;
  color:grey;
}

.seperator {
  float: left;
  width: 2%;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  color:grey;
}

.value {
  float: left;
  width: 49%;
  text-align: left;
  font-size: 14px;
  color:crimson;
}

</style>
