<template>
  <h2>질문게시판 상세</h2>
  <v-row justify="center">
    <v-col cols="11" :style="{ textAlign: 'left' }">
      <v-col :style="{ font: '30px bold' }">{{ question.title }}</v-col>
      <v-col>
        <img :src="question.profileImg" class="profile-img" />
        {{ question.writer }} &nbsp;&nbsp;&nbsp; {{ question.date }}
      </v-col>
      <hr />
      <v-col :style="{ fontSize: '18px', whiteSpace:'pre', overflow: 'auto'}">{{
        question.body ? question.body : "내용이 없습니다."
      }}</v-col>
      <hr />

      <v-row justify="start" :style="{ marginTop: '20px' }">
        <v-col cols="1"
          ><v-btn color="green" @click="onUpdate(question.id)"
            >수정</v-btn
          ></v-col
        >
        <v-col cols="1"
          ><v-btn color="red" @click="onDelete(question.id)">삭제</v-btn></v-col
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
import { getPost, deletePost } from "@/apis/api/index.js"
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { dateFormatting } from "@/composables/dateFormatting.js";

const route = useRoute();
const router = useRouter();

const questionId = route.params.id;
const question = ref({
  id: questionId,
  writer: "",
  date: "",
  title: "",
  body: "",
});

const getQuestion = async () => {
    const res = await getPost("Test001", questionId);
    // const res = await instance.get(`repos/Soooobiniya/Test001/issues/${questionId}`);
    question.value.id = res.data.number;
    question.value.writer = res.data.user.login;
    question.value.profileImg = res.data.user.avatar_url;
    question.value.date = dateFormatting(res.data.updated_at);
    question.value.title = res.data.title;
    question.value.body = res.data.body;
};
getQuestion();

const backToList = () => {
  router.push({
    name: "QuestionList",
  });
};

const onUpdate = (postId) => {
  console.log(postId);
  router.push({
    name: "QuestionEdit",
    params: {
      id: postId,
    },
  });
};

const onDelete = async (postId) => {
  await deletePost(postId);
  backToList();
};
</script>

<style scoped>
hr {
  height: 3px;
  background: black;
}
</style>