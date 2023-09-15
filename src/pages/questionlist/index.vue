<template>
  <h2>질문게시판</h2>
  <v-row :style="{ marginTop: '20px' }">
    <v-row>
      <v-col cols="12" md="2">
        <v-select
          label="선택"
          :items="searchTypes"
          :style="{ width: '90px', marginLeft: '90px' }"
          v-model="selectType"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          label="검색키워드"
          :style="{ marginLeft: '50px' }"
          v-model="searchText"
          @keyup.enter="searchQuestions"
        />
      </v-col>
      <v-col cols="12" md="1">
        <v-btn @click="searchQuestions">검색</v-btn>
      </v-col>
      <v-col v-if="searchActive" cols="12" md="1">
        <v-btn color="red" @click="undoSearch">검색 취소</v-btn>
      </v-col>
    </v-row>
    <v-col cols="12" md="3">
      <v-btn color="#3bb143" @click="moveToCreatePage">글쓰기</v-btn>
    </v-col>
  </v-row>

  <v-table class="text-left" :style="{ margin: '10px 90px' }">
    <thead>
      <tr>
        <th width="1%">번호</th>
        <th width="10%">제목</th>
        <th width="2%">작성자</th>
        <th width="3%">작성일</th>
      </tr>
    </thead>
    <tbody v-if="postList">
      <tr v-for="(item, i) in postList" :key="item.id">
        <td>{{ postList.length - i }}</td>
        <td @click="moveToId(item.number)" class="table-title">
          {{ item.title }}
        </td>
        <td>
          <img :src="item.user.avatar_url" class="profile-img" />
          {{ item.user.login }}
        </td>
        <td>{{ dateFormatting(item.updated_at) }}</td>
      </tr>
    </tbody>
  </v-table>

  <div v-if="!postList" class="emptyCase">등록된 게시글이 없습니다.</div>
</template>

<script setup>
import { getPostList, searchPost } from "@/apis/api/index.js";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { dateFormatting } from "@/composables/dateFormatting.js";

const router = useRouter();
const searchTypes = ["제목", "내용"];
const postList = ref(null);

const selectType = ref("");
const searchText = ref("");
const searchActive = ref(false);

const getList = async () => {
  const res = await getPostList("Test001");
  postList.value = res.data;
};
getList();

const searchQuestions = async () => {
  if (!searchText) {
    getList();
  }

  let res;
  if (selectType.value === "제목") {
    res = await searchPost("Test001", searchText.value, "title");
  } else if (selectType.value === "내용") {
    res = await searchPost("Test001", searchText.value, "body");
  } else {
    res = await searchPost("Test001", searchText.value, "all");
  }
  postList.value = res.data.items;

  if (searchText.value !== "") {
    searchActive.value = true;
  }
};

const undoSearch = async () => {
  getList();
  searchActive.value = false;
  searchText.value = "";
};

const moveToCreatePage = () => {
  router.push({
    name: "QuestionCreate",
  });
};

const moveToId = (questionId) => {
  router.push({
    name: "Question",
    params: {
      id: questionId,
    },
  });
};
</script>

<style>


/* .table-title {
  width: 100%;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
} */

.profile-img {
  width: 25px;
  border-radius: 100%;
  vertical-align: middle;
}

.emptyCase {
  margin: 200px auto;
}
</style>