<template>
  <main>
    <h1>LOGIN</h1>

    <form
      v-if="!isAuthenticated"
      @submit.prevent="goLogin({ username, password })"
    >
      <input type="text" v-model="username" placeholder="username" />
      <input type="text" v-model="password" placeholder="password" />
      <input type="submit" value="Connexion" />
    </form>

    <p v-else>Vous êtes connecté</p>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
  }),
  computed: mapGetters(["isAuthenticated"]),
  methods: {
    goLogin({ username, password }) {
      if (username && password) {
        this.$store.dispatch("login", { username, password });
      }
    },
  },
};
</script>

<style>
</style>