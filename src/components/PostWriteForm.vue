<template>
  <v-col cols="12">
    <v-card :style="{ margin: '0 90px' }">
      <v-form ref="form" @submit.prevent="onSave">
        <v-text-field
          label="제목"
          class="form-area"
          :class="{ formError: titleError }"
          v-model="post.title"
          required
          autofocus
        ></v-text-field>
        <div v-if="titleError" class="textError">
          {{ titleError }}
        </div>
        <v-textarea
          rows="15"
          label="내용"
          class="form-area"
          :class="{ formError: bodyError }"
          v-model="post.body"
          required
        ></v-textarea>
        <div v-if="bodyError" class="textError">
          {{ bodyError }}
        </div>

        <div :style="{ textAlign: 'right', margin: '0 20px 0 20px' }">
          <v-btn class="submit-btn" @click="validCheck" :disabled="isClick">
            {{ editing ? "수정하기" : "등록하기" }}
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-col>
</template>

<script setup>
import instance from "@/apis/utils/instance.js";
import { getPostList, getPost, createPost, editPost } from "@/apis/api/index.js"
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const props = defineProps({
  repoName: {
    type: String,
    required: true
  },
  editing: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();
const route = useRoute();

const post = ref({
  title: "",
  body: "",
});
const originalPost = ref(null);

const titleError = ref("");
const bodyError = ref("");
const isClick = ref(false);

let postId = route.params.id;
const getPostForEdit = async () => {
  try {
    const res = await getPost(props.repoName, postId)
    console.log(res.data);
    post.value.title = res.data.title;
    post.value.body = res.data.body;

    originalPost.title = { ...res.data.title };
    originalPost.body = { ...res.data.body };
  } catch (error) {
    console.log(error);
  }
};

if (props.editing) {
  getPostForEdit(); // editing === true일 때만 post 정보들을 가져옴
}

const validCheck = () => {
  titleError.value = "";
  bodyError.value = "";
  if (!post.value.title) {
    titleError.value = "제목을 입력해주세요.";
    return;
  }
  if (!post.value.body) {
    bodyError.value = "내용을 입력해주세요.";
    return;
  }

  isClick.value = true;

  onSave();
}

const onSave = async () => {
  try {
    let res;
    if (props.editing) {
      res = await editPost(props.repoName, postId, post.value)
      originalPost.title = { ...res.data.title };
      originalPost.body = { ...res.data.body };
    } else {
      res = await createPost(props.repoName, post.value)
      postId = res.data.number;
      post.value.title = "";
      post.value.body = "";
    }

    router.push({
      name: props.repoName,
      params: {
        id: postId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.form-area {
  margin: 30px 20px 0px 20px;
  color: grey;
}
.formError {
  color: red;
}

.textError {
  text-align: left;
  margin-left: 30px;
  color: red;
}

.submit-btn {
  width: 100px;
  margin-bottom: 20px;
  background-color: #3bb143;
  color: white;
  font: 15px bold;
}
</style>