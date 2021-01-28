<template>
  <main>
    <h1>LOGIN</h1>
    <form v-if="!isAuthenticated" @submit.prevent="login(email, password)">
      <input type="text" v-model="email" placeholder="email" />
      <input type="text" v-model="password" placeholder="password" />
      <input type="submit" value="Connexion" />
    </form>
    <p v-else>Vous êtes connecté</p>
  </main>
</template>

<script>
import { mapActions ,mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: mapGetters(['isAuthenticated']),
  methods: {
    ...mapActions(['login']),
    login(email, password) {
      this.$store.dispatch('login', {email, password})
    }
  },
};
</script>

<style>
</style>