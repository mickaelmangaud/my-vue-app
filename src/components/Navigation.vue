<template>
  <nav>
    <img src="../assets/logo.png" alt="menu logo" />
    <ul>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/posts" class="link">Posts</router-link>
      <router-link to="/about" class="link">About</router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  display: flex;
  box-shadow: 1px 2px 3px rgba(120, 120, 120, 0.3);
  background-color: #fff;
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
</style>