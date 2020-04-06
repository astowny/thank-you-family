<template>
  <div>
    <div v-if="$auth.user">
      <button type="button" @click="$auth.logout">Log out</button>
      <App />
    </div>

    <LoginForm v-else :errorMessage="errorMessage" @submit="login" />
  </div>
</template>

<script>
import App from "./App.vue";
import LoginForm from "./LoginForm.vue";

export default {
  components: {
    App,
    LoginForm
  },
  data() {
    return {
      user: null,
      errorMessage: ""
    };
  },
  methods: {
    login({ username, password }) {
      this.$auth.login(username, password);
      if (!this.$auth.user) {
        this.errorMessage = "Authentication failed, please try again";
      }
    }
  },
  created() {
    this.$auth.init();
  }
};
</script>

<style>
</style>
