<template>
  <v-container>
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

    <!-- Scholarship Live -->
    <div class="mt-1 mb-3">
      <div class="d-flex justify-space-between align-center">
        <h5 class="text-h6">International Scholarships</h5>
        <div class="text-subtitle-2" style="color: var(--secondary-color)">See all</div>
      </div>
      <div>
        <ScholarshipCard
          v-for="i in 3"
          :key="i"
          :imgUrl="scholarshipData.imgUrl"
          :scholarshipName="scholarshipData.scholarshipName"
          :universityName="scholarshipData.universityName"
          :availableApplicants="scholarshipData.availableApplicants"
          :endDate="scholarshipData.endDate"
        />
      </div>
    </div>

    <!-- Student success stories -->
    <div class="mt-2 mb-3">
      <h5 class="text-h6">Student success stories</h5>
      <div class="horizontal-scroll">
        <SuccessStoryCard v-for="i in 3" :key="i" />
      </div>
    </div>
  </v-container>
</template>

<script>
import liveImage from "../assets/live.png";
import liveOneImage from "../assets/live1.png";
import scholarshipImage from "../assets/scholarship.png";

import LiveCard from "../components/card/LiveCard.vue";
import ScholarshipCard from "../components/card/ScholarshipCard.vue";
import SuccessStoryCard from "../components/card/SuccessStoryCard.vue";
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
      scholarshipData: {
        imgUrl: scholarshipImage,
        scholarshipName: "EIT International Excellence Scholarship",
        universityName: "Chulalongkorn Unviersity",
        availableApplicants: 3,
        endDate: "May 26, 2023",
      },
    };
  },
  components: { LiveCard, ScholarshipCard, SuccessStoryCard },
};
</script>

<style>
.horizontal-scroll {
  display: flex;
  overflow: scroll;
}
</style>
