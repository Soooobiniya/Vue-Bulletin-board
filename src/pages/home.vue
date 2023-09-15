<template>
  <v-row :style="{ margin: '0 60px' }">
    <v-carousel
      cycle
      height="270"
      interval="2000"
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-row>
  <v-row class="boards-contatiner">
    <v-col class="board-title">
      <div @click="moveToBoard('QuestionList')" :style="{ cursor: 'pointer' }">
        질문게시판
      </div>
      <v-card v-if="questions" class="board-card mx-auto">
        <v-list :items="questions" item-title="title"></v-list>
      </v-card>
    </v-col>
    <v-col class="board-title">
      <div @click="moveToBoard('FreeList')" :style="{ cursor: 'pointer' }">
        자유게시판
      </div>
      <v-card v-if="frees" class="board-card mx-auto">
        <v-list :items="frees" item-title="title"></v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { getPostList } from "@/apis/api/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const items = [
  {
    src: "https://blog.kakaocdn.net/dn/dAQdT9/btqA6pSGU0J/yQXubF3i4kkiStb0zfM580/img.jpg",
  },
  {
    src: "https://blog.kakaocdn.net/dn/LHHKW/btrtOzGnp0u/vIulxTGBijZC4n5UztcgbK/img.jpg",
  },
  {
    src: "https://a-static.besthdwallpaper.com/hong-kong-city-night-view-wallpaper-2880x1620-80337_52.jpg",
  },
  {
    src: "https://blog.kakaocdn.net/dn/dwdUtv/btq09jq3bP5/kRmwGHygm8L5jkDEW0Sr0k/img.jpg",
  },
];

const questions = ref(null);
const frees = ref(null);

const getQuestions = async () => {
  const res = await getPostList("Question");
  questions.value = res.data;
  if (questions.value.length > 5) {
    questions.value.splice(5);
  }
};
getQuestions();

const getFrees = async () => {
  const res = await getPostList("Free");
  frees.value = res.data;
  if (frees.value.length > 5) {
    frees.value.splice(5);
  }
};
getFrees();

const moveToBoard = (boardName) => {
  router.push({
    name: boardName,
  });
};
</script>

<style scoped>
.v-carousel__controls {
  color: white;
  width: 10%;
}
#carousel-item-0,
#carousel-item-1,
#carousel-item-2,
#carousel-item-3 {
  width: 20px;
  height: 20px;
}

.board-title {
  font-weight: bold;
  text-align: start;
  margin: 0 70px;
  color: rgb(0, 70, 52);
}

.board-card {
  margin-top: 10px;
}
</style>