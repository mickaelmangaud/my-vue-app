<template>
  <main>
    <h1>LOGIN</h1>
    <form @submit.prevent="login({ username, password })">
      <input type="text" v-model="username" />
      <input type="text" v-model="password" />
      <input type="submit" value="Connexion" />
    </form>
  </main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  methods: {
    ...mapActions(["login"]),
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style>
</style>