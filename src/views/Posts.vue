<template>
  <main>
    <h1>Post Vue</h1>
    <div v-for="post in posts" :key="post.id" class="post">
      <div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
      <button class="delete" @click="deletePost(post.id)">Delete</button>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Posts",
  methods: {
    ...mapActions(["fetchPosts", "deletePost"]),
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
  margin: 0 auto;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  width: 70%;
}

.delete {
  height: 50%;
  align-self: center;
  padding: 8px 12px;
  background-color: rgb(194, 89, 89);
  border: none;
}

h2 {
  text-transform: capitalize;
  margin-bottom: 12px;
}
</style>