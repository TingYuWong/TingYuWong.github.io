<template>
  <div class="home" :class="(dayMode) ? 'dayBg' : 'nightBg' " >
    <Message />
    <LandingPage />
    <AboutMe />
    <TimeLine />
    <Learning />
    <Contact />
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
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    LandingPage,
    AboutMe,
    TimeLine,
    Message,
    Learning,
    Contact,
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
