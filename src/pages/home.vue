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
      질문게시판
      <v-card class="board-card mx-auto">
        <v-list :items="itemssss" item-title="name" item-value="id"></v-list>
      </v-card>
    </v-col>
    <v-col class="board-title">
      자유게시판
      <v-card class="board-card mx-auto">
        <v-list :items="itemssss" item-title="name" item-value="id"></v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
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

const itemssss = [
  {
    name: "Item #1",
    id: 1,
  },
  {
    name: "Item #2",
    id: 2,
  },
  {
    name: "Item #3",
    id: 3,
  },
  {
    name: "Item #4",
    id: 4,
  },
  {
    name: "Item #5",
    id: 5,
  },
];
</script>

<style>
/* <-- remove scoped here if you have it*/
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
  color:rgb(0, 70, 52);
}

.board-card {
  margin-top: 10px;
}
</style>