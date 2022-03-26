<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif');
@import url('https://fonts.googleapis.com/css?family=Lato');
@import url('https://fonts.googleapis.com/css?family=Red+Hat+Mono');

#app {
  font-family: 'Lato', 'Red Hat Mono', 'Noto Serif', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html, body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  overflow-x: hidden;
  /* background-color: #f7ede2; */
  /* background-color: #FAACA8;
background-image: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%); */
}

.title {
    height: 20%;
    padding-top: 30px;
    box-sizing: border-box;
    text-align: left;
    font-size: 80px;
    color: rgb(0, 170, 147);
    text-shadow: #fff 3px 5px;
}

.title.night {
  color: #fff;
  text-shadow: rgba(115, 54, 252, 1)  3px 5px;
}

.dayBg {
  /* background-color: #F1E9DB; */
  background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
}

.nightBg {
  /* background-color: #716A5C; */
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}
</style>
