<template>
  <form class="image-form" @submit.prevent="submit()">
    <div class="form">
      <p v-if="errorMessage" class="error">{{errorMessage}}</p>
      <div class="input-group">
        <label for="select1">Nom de la personne très chère :</label>
        <select class="input first" id="select1" v-model="username">
          <option value selected>Choisissez</option>
          <option
            v-for="(user,i) in users"
            :key="i+user.username"
            :value="user.username"
          >{{user.username}}</option>
        </select>
      </div>
      <div class="input-group">
        <label for="password1">Mot de passe royal :</label>
        <input class="input second" id="password1" type="password" v-model="password" />
      </div>
      <div class="input-group">
        <button class="btn" type="submit">Log in</button>
      </div>
    </div>
  </form>
</template>

<script>
import users from "../users";
export default {
  props: {
    errorMessage: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      username: "",
      password: "",
      users: users
    };
  },
  methods: {
    submit() {
      this.$emit("submit", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
.btn {
  border-radius: 5px;
  background-color: goldenrod;
  color: blue;
  font-weight: 900;
  border: none;
  height: 36px;
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

.input-group {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}
.input {
  border-radius: 5px;
  border: 2px solid gold;
  margin-top: 5px;
  height: 30px;
}
.input.first {
  height: 36px;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 500px;
  margin: auto;
  padding: 7px 50px;
  height: 300px;
  background: rgb(252, 209, 100);
  border-radius: 10px;
}
.image-form {
  display: flex;
  background-image: url("royal-fence.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 97vh;
}
.error {
  color: tomato;
}
</style>