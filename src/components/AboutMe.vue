<template>
    <div class="wrap">
       <div class="title" :class="{ night: !dayMode }">About Me</div>
       <div class="content" :class="{ night: !dayMode }">
           <div class="left">
                <p>I work on liberating from limitations and reaching full potentials with might and main.</p>
                <p>My aim is to find or create an environment where team members could inspire one another and soar up to the sky together.</p>
                <p>Learning new skills and growing with others give me a real thrill.</p>
                <p>I have faith in my learning ability and gain recognition from my supervisors several times for my rapid growth in a short time.</p>
                <p>And these are what make me ONE OF A KIND.</p>
           </div>
           <div class="right">
               <Name />
           </div>
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Name from './AboutMe/Name.vue'

export default {
    name: 'AboutMe',
    components: {
        Name,
    },
    computed: {
        ...mapState(['dayMode']),
    },
}
</script>

<style scoped>
.wrap {
    min-height: 100vh;
    padding-left: 80px;
    padding-right: 80px;
    margin-top: 100px;
}

.content {
    padding: 20px 20px 0px 0px;
    text-align: left;
    color: #143d3d;
    font-size: 18px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.content.night {
    color: #fff;
}

.left, .right {
    /* background-color: #fff; */
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 30px;
    /* padding-right: 20px; */
}

.right {
    margin-left: 20px;
    min-width: 300px;
}
</style>