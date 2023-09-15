<template>
  <v-row justify="center">
    <v-col cols="11" :style="{ textAlign: 'left' }">
      <v-col :style="{ font: '30px bold' }">{{ post.title }}</v-col>
      <v-col>
        <img :src="post.profileImg" class="profile-img" />
        {{ post.writer }} &nbsp;&nbsp;&nbsp; {{ post.date }}
      </v-col>
      <hr />
      <v-col
        :style="{ fontSize: '18px', whiteSpace: 'pre', overflow: 'auto' }"
        >{{ post.body ? post.body : "내용이 없습니다." }}</v-col
      >
      <hr />

      <v-row justify="start" :style="{ marginTop: '20px' }">
        <v-col cols="1"
          ><v-btn color="green" @click="onUpdate(post.id)"
            >수정</v-btn
          ></v-col
        >
        <v-col cols="1"
          ><v-btn color="red" @click="onDelete(post.id)">삭제</v-btn></v-col
        >

        <v-row justify="end">
          <v-col cols="1"
            ><v-btn color="blue" @click="backToList">목록</v-btn></v-col
          >
        </v-row>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { getPost, deletePost } from "@/apis/api/index.js";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { dateFormatting } from "@/composables/dateFormatting.js";

const props = defineProps({
  repoName: {
    type: String,
    required: true
  },
});

const route = useRoute();
const router = useRouter();

const postId = route.params.id;
const post = ref({
  id: postId,
  writer: "",
  date: "",
  title: "",
  body: "",
});

const getPosts = async () => {
  const res = await getPost(props.repoName, postId);
  post.value.id = res.data.number;
  post.value.writer = res.data.user.login;
  post.value.profileImg = res.data.user.avatar_url;
  post.value.date = dateFormatting(res.data.updated_at);
  post.value.title = res.data.title;
  post.value.body = res.data.body;
};
getPosts();

const backToList = () => {
  router.push({
    name: props.repoName + "List",
  });
};

const onUpdate = (postId) => {
  console.log(postId);
  router.push({
    name: props.repoName + "Edit",
    params: {
      id: postId,
    },
  });
};

const onDelete = async (postId) => {
  if (confirm("삭제하시겠습니까?")) {
    await deletePost(props.repoName, postId);
    backToList();
  }
};
</script>

<style>
hr {
  height: 3px;
  background: black;
}
</style>