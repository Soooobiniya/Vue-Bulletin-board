<template>
  <h2>질문게시판 수정하기</h2>
  <PostWriteForm repoName='Question' :editing="true"/>
</template>

<script setup>
import PostWriteForm from "@/components/PostWriteForm.vue";
</script>

<style>
</style>