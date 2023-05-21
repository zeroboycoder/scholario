<template>
  <v-app-bar style="background-color: white">
    <v-container>
      <div class="d-flex justify-space-between align-center">
        <div>
          <img :src="logo" alt="Logo Image" />
        </div>
        <v-icon icon="mdi-magnify" size="30"></v-icon>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import logoImage from "../../assets/logo.png";
export default {
  data() {
    return {
      logo: logoImage,
    };
  },
  computed: {
    theLogo() {
      return require("../../assets/logo.png");
    },
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>
