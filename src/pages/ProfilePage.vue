<template>
  <div class="v-container">
    <div class="d-flex justify-center align-center" style="height: 220px">
      <v-avatar :image="profileImage" size="120"></v-avatar>
    </div>
    <div>
      <v-text-field
        label="Name"
        variant="outlined"
        v-model="name"
        prepend-inner-icon="mdi-account-outline"
        readonly
      ></v-text-field>
      <v-text-field
        label="Email"
        variant="outlined"
        v-model="email"
        prepend-inner-icon="mdi-email-outline"
        readonly
      ></v-text-field>
      <v-text-field
        label="Phone Number"
        variant="outlined"
        v-model="phoneNumer"
        prepend-inner-icon="mdi-phone-outline"
        readonly
      ></v-text-field>
    </div>
  </div>
</template>

<script>
import ProfileImage from "../assets/profile.png";
export default {
  data() {
    return {
      profileImage: ProfileImage,
      name: "Jame Smith",
      email: "jamesmith@gmail.com",
      phoneNumer: "+959123456789",
    };
  },
};
</script>
