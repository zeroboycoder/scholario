<template>
  <v-app>
    <the-alert />
    <NavBar />
    <div style="height: 60px"></div>
    <router-view />
    <div style="height: 60px"></div>
    <BottomNavigation />
  </v-app>
</template>

<script>
import NavBar from "./components/navbar/NavBar.vue";
import TheAlert from "./components/global/TheAlert.vue";
import BottomNavigation from "./components/navbar/BottomNavigation.vue";

export default {
  components: {
    NavBar,
    TheAlert,
    BottomNavigation,
  },
};
</script>

<style>
:root {
  --primary-color: #bbff2c;
  --secondary-color: #84b13b;
  --tartiary-color: #ecf0f5;
  --box-shadow: 2px 2px 15px #00000030;
}
</style>
