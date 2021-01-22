<template>
  <screen-wrapper>
    <p>VueJs Test très moche mais c'est pas grave ! {{ title }}</p>
    <button @click="changeTitle">Click</button>
  </screen-wrapper>
</template>

<script>
import ScreenWrapper from "@/components/ScreenWrapper.vue";

export default {
  name: "Home",
  components: { ScreenWrapper },
  data: () => ({
    title: "",
  }),
  methods: {
    changeTitle() {
      this.title = "le but n'étant pas de faire du css";
    },
  },
};
</script>
