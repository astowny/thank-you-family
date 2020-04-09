<template>
  <div>
    <div v-if="$auth.user">
      <button class="btn" type="button" @click="$auth.logout">Log out</button>
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
      this.errorMessage = "";
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");

.btn {
  position: relative;
  z-index: 300;
  border-radius: 5px;
  background-color: goldenrod;
  color: rgb(16, 114, 170);
  font-weight: 900;
  border: none;
  height: 36px;
  width: 100px;
  display: flex;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif;
}

.btn:hover {
  background: rgb(133, 101, 20);
  cursor: pointer;
}

* {
  font-family: "Raleway", sans-serif;
}
</style>
