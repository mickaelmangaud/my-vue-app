<template>
  <main>
    <h1>LOGIN</h1>

    <form
      v-if="!isAuthenticated"
      @submit.prevent="login({ username, password })"
    >
      <input type="text" v-model="username" placeholder="username" />
      <input type="text" v-model="password" placeholder="password" />
      <input type="submit" value="Connexion" />
    </form>

    <p v-else>Vous êtes connecté</p>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
  computed: mapGetters(["isAuthenticated"]),
};
</script>

<style>
</style>