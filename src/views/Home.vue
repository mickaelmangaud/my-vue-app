<template>
  <ScreenWrapper>
    <p>VueJs Test très moche mais c'est pas grave ! {{ title }}</p>
    <button @click="insertData">Click</button>
  </ScreenWrapper>
</template>

<script>
import ScreenWrapper from "@/components/ScreenWrapper.vue";
import { db } from "../main";

export default {
  name: "Home",
  components: { ScreenWrapper },
  data: () => ({
    title: "",
  }),
  methods: {
    async insertData() {
      const docRef = db.collection("posts").doc("fsdfd");
      await docRef.set({
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
    },
  },
};
</script>
