<template>
  <div class="home" :class="(dayMode) ? 'dayBg' : 'nightBg' " >
    <Message />
    <LandingPage />
    <AboutMe />
    <TimeLine />
    <Learning />
  </div>
</template>

<script>
import { mapState } from 'vuex'
// @ is an alias to /src
import Message from '@/components/Message.vue'
import LandingPage from '@/components/LandingPage.vue'
import AboutMe from '@/components/AboutMe.vue'
import TimeLine from '@/components/TimeLine.vue'
import Learning from '@/components/Learning.vue'

export default {
  name: 'Home',
  components: {
    LandingPage,
    AboutMe,
    TimeLine,
    Message,
    Learning,
  },
  computed: {
    ...mapState(['dayMode']),
  },
}
</script>

<style scoped>
.home {
  transition: all 3s;
}
</style>
