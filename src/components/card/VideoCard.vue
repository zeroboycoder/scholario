<template>
  <div class="my-3" style="max-width: 45%">
    <img :src="imgUrl" alt="Mentor Image" style="width: 100%" />
    <div style="font-weight: 500; font-size: 16px">{{ videoName }}</div>
    <div class="text-caption">{{ mentorName }}</div>
  </div>
</template>

<script>
export default {
  props: ["imgUrl", "videoName", "mentorName"],
};
</script>
