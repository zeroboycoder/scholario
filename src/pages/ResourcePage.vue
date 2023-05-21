<template>
  <div class="v-container">
    <!-- Scholarship Live -->
    <div class="mt-1 mb-3">
      <div class="d-flex justify-space-between align-center">
        <h5 class="text-h6">Scholarship live sction</h5>
        <div class="text-subtitle-2" style="color: var(--secondary-color)">See all</div>
      </div>
      <div class="horizontal-scroll">
        <LiveCard
          v-for="data in liveDatas"
          :key="data"
          :imgUrl="data.imgUrl"
          :liveName="data.liveName"
          :mentorName="data.mentorname"
        />
      </div>
    </div>

    <!-- Videos -->
    <div>
      <v-chip-group selected-class="selectedChip">
        <v-chip class="text-caption">All</v-chip>
        <v-chip class="text-caption">Live</v-chip>
        <v-chip class="text-caption">Record</v-chip>
      </v-chip-group>
      <div class="d-flex justify-space-between flex-wrap">
        <VideoCard
          v-for="video in videoDatas"
          :key="video"
          :imgUrl="video.imgUrl"
          :videoName="video.videoName"
          :mentorName="video.mentorName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LiveCard from "../components/card/LiveCard.vue";
import liveImage from "../assets/live.png";
import liveOneImage from "../assets/live1.png";
import VideoImage from "../assets/video.png";
import VideoOneImage from "../assets/video1.png";
import VideoCard from "../components/card/VideoCard.vue";

export default {
  data() {
    return {
      liveDatas: [
        {
          imgUrl: liveImage,
          liveName: "Preparation for Scholarship (Part-1)",
          mentorname: "Jame Smith",
        },
        {
          imgUrl: liveOneImage,
          liveName: "Preparation for Scholarship (Part-2)",
          mentorname: "Jame Smith",
        },
        {
          imgUrl: liveImage,
          liveName: "Preparation for Scholarship (Part-1)",
          mentorname: "Jame Smith",
        },
        {
          imgUrl: liveOneImage,
          liveName: "Preparation for Scholarship (Part-2)",
          mentorname: "Jame Smith",
        },
      ],
      videoDatas: [
        {
          imgUrl: VideoImage,
          videoName: "Preparation for Scholarship (Part-1)",
          mentorName: "Jame Smith",
        },
        {
          imgUrl: VideoOneImage,
          videoName: "Preparation for Scholarship ",
          mentorName: "Jame Smith",
        },
        {
          imgUrl: VideoOneImage,
          videoName: "Preparation for Scholarship ",
          mentorName: "Jame Smith",
        },
        {
          imgUrl: VideoImage,
          videoName: "Preparation for Scholarship (Part-1)",
          mentorName: "Jame Smith",
        },
        {
          imgUrl: VideoOneImage,
          videoName: "Preparation for Scholarship ",
          mentorName: "Jame Smith",
        },
        {
          imgUrl: VideoOneImage,
          videoName: "Preparation for Scholarship ",
          mentorName: "Jame Smith",
        },
        {
          imgUrl: VideoOneImage,
          videoName: "Preparation for Scholarship ",
          mentorName: "Jame Smith",
        },
        {
          imgUrl: VideoImage,
          videoName: "Preparation for Scholarship (Part-1)",
          mentorName: "Jame Smith",
        },
        {
          imgUrl: VideoOneImage,
          videoName: "Preparation for Scholarship ",
          mentorName: "Jame Smith",
        },
      ],
    };
  },
  components: { LiveCard, VideoCard },
};
</script>

<style scoped>
.selectedChip {
  background-color: var(--primary-color);
}
</style>
