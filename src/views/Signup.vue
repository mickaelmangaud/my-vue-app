<template>
  <main>
    <h1>SIGNUP</h1>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: mapGetters(["isAuthenticated"]),
};
</script>

<style>
</style>