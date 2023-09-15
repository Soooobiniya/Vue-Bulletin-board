<template>
  <h2>자유게시판 수정하기</h2>
  <PostWriteForm repoName='Free' :editing="true"/>
</template>

<script setup>
import PostWriteForm from "@/components/PostWriteForm.vue";
</script>

<style>
</style>