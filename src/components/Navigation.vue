<template>
  <nav>
    <router-link to="/">
      <img src="../assets/logo.png" alt="menu logo" />
    </router-link>

    <div class="username">
      <div v-if="isAuthenticated">
        <p>Connecté en tant que {{ username }}</p>
        <button @click="logout()">Logout</button>
      </div>
      <p v-else>Non connecté</p>
    </div>

    <ul>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/posts" class="link">Posts</router-link>
      <router-link to="/about" class="link">About</router-link>
      <router-link to="/login" class="link">Login</router-link>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters(["isAuthenticated", "username"]),
  methods: mapActions(["logout"]),
};
</script>

<style>
nav {
  display: flex;
  box-shadow: 1px 2px 3px rgba(120, 120, 120, 0.3);
  background-color: #fff;
  position: fixed;
  width: 100%;
}

img {
  padding: 12px;
  width: 70px;
}

ul {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding-right: 24px;
  list-style: none;
}

.link,
.link:visited {
  margin-left: 24px;
  text-transform: uppercase;
  text-decoration: none;
  color: #222;
}

.username {
  align-self: center;
}
</style>