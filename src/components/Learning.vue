<template>
    <div class="wrap">
       <div class="title" :class="{ night: !dayMode }">Learning</div>
       <div class="content" :class="{ night: !dayMode }">
           <p>I love to learn new skills, and here are all the online courses I took and recommend!</p>
           <div class="course-wrap">
               <div class="card" v-for="(item, index) in courses" :key="index" @click="toWebSite(item.url)">
                   {{ item.nam }}
                </div>
           </div>
           <p>Thanks to these courses, I improve a lot. I really appreciate their effort!</p>
           <p>Personally, I pay for yearly fee on Vue Mastery, Vue school, and Frontend Masters. They are totally worth it. I take courses almost every day because I value my websites and I wanna make them better. Also, the feeling of accomplishment just makes me addicted to it.</p>
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Learning',
    data() {
        return {
            courses: [
                { nam: 'Frontend Masters', url: 'https://frontendmasters.com' },
                { nam: 'Vue Mastery', url: 'https://www.vuemastery.com' },
                { nam: 'Vue School', url: 'https://vueschool.io' },
                { nam: 'Coursera - Google IT Support - Google Career Certificates', url: 'https://www.coursera.org/professional-certificates/google-it-support?utm_source=gg&utm_medium=sem&campaignid=6495575193&adgroupid=82011574030&device=c&keyword=it%20support%20courses&matchtype=b&network=g&devicemodel=&adpostion=&creativeid=475014999808&hide_mobile_promo&gclid=Cj0KCQjw8_qRBhCXARIsAE2AtRbpOfY_21xR4mUw2TbCsUDz60s7qn8133knu1Du1xT1qHYKsjgOCXkaAl3TEALw_wcB' },
                { nam: 'Udemy - Modern React with Redux - Stephen Grider', url: 'https://www.udemy.com/course/react-redux/' },
            ],
        }
    },
    computed: {
        ...mapState(['dayMode']),
    },
    methods: {
        toWebSite(url) {
            window.open(url)
        }
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

.course-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.card {
    padding: 10px;
    box-shadow: 0px 0px 10px #eee;
    border-radius: 10px;
    background-color: #fff;
    color: rgb(0, 170, 147);
    flex: 1;
    height: 300px;
    margin-bottom: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.card:hover {
    box-shadow: 0px 0px 50px rgb(43, 167, 125);
    font-weight: bold;
    animation-duration: 1000ms;
    animation-name: shake;
    -webkit-animation-duration: 1000ms;
    -webkit-animation-name: shake;
}
.content.night .card:hover {
    box-shadow: 0px 0px 50px rgb(98, 31, 255);
    animation-duration: 1000ms;
    animation-name: shake;
    -webkit-animation-duration: 1000ms;
    -webkit-animation-name: shake;
}

.content.night > .card {
    background-color: rgb(255, 255, 255);
    color: rgba(115, 54, 252, 1);
}

.content.night .card {
    background-color: rgb(255, 255, 255);
    color: rgba(115, 54, 252, 1);
}

@keyframes shake {
    0% { transform: rotate(0deg) }
    25% { transform: rotate(-10deg) }
    75% { transform: rotate(10deg) }
    100% { transform: rotate(0deg) }
}
@-webkit-keyframes shake {
    0% { transform: rotate(0deg) }
    25% { transform: rotate(-10deg) }
    75% { transform: rotate(10deg) }
    100% { transform: rotate(0deg) }
}
</style>