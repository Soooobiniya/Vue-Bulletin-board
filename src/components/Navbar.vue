<template>
  <nav>
    <v-toolbar color="#96b8a96c">
      <v-toolbar-title>
        <router-link to="/">홈</router-link><v-spacer></v-spacer
      ></v-toolbar-title>
      <v-toolbar-title
        ><router-link to="/questionlist">질문게시판</router-link>
        <v-spacer></v-spacer
      ></v-toolbar-title>
      <v-toolbar-title
        ><router-link to="/freelist">자유게시판</router-link>
      </v-toolbar-title>
    </v-toolbar>
  </nav>
</template>

<script>
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
}


nav a.router-link-exact-active {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}
</style>