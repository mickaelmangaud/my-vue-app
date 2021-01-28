<template>
  <nav>
    <router-link to="/">
      <img src="@/assets/logo.png" alt="menu logo" />
    </router-link>

    <div class="username">
      <div v-if="isAuthenticated">
        <p>Connecté en tant que {{ email }}</p>
        <button @click="logout()">Logout</button>
      </div>
      <p v-else>Non connecté</p>
    </div>

    <ul>
      <RouterLink to="/" class="link">Home</RouterLink>
      <RouterLink to="/posts" class="link">Posts</RouterLink>
      <RouterLink to="/about" class="link">About</RouterLink>
      <!-- <RouterLink v-if="!isAuthenticated" to="/signup" class="link">Signup</RouterLink> -->
      <RouterLink v-if="!isAuthenticated" to="/signin" class="link">Signin</RouterLink>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: mapGetters(["isAuthenticated", 'email']),
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