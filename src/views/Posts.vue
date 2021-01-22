<template>
  <main>
    <h1>Post Vue</h1>
    <div v-for="post in posts" :key="post.id" class="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Posts",
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  computed: {
    ...mapGetters(["posts"]),
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style>
h1 {
  margin-bottom: 32px;
  text-align: center;
}

.post {
  margin-bottom: 24px;
}

h2 {
  text-transform: capitalize;
  margin-bottom: 12px;
}
</style>