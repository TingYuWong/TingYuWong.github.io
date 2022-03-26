<!--用three.js畫出首頁
就只是一些簡單在跑的線條 和一些可愛的小幾何圖形 有點像天體運行
象徵我的腦袋 隨時都在轉 充滿創意 充滿可能性
-->
<template>
    <div class="wrap">
        <Toggle @changeMode="changeMode"/>
        <div class="hi-title" :class="{ night: !dayMode }">Hi, I am</div>
        <div class="nam-amine">
            <div class="rect" ref="rect"></div>
            <div class="nam" ref="nam">
                <div>T</div>
                <div style="margin-left: 70px;">na</div>
            </div>
            <div class="circle" ref="circle"></div>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'
import Toggle from '@/components/LandingPage/Toggle.vue'

export default {
    name: 'LandingPage',
    components: {
        Toggle,
    },
    data() {
        return {
            toBlack: true,
            toDayTimeline: null,
            toNightTimeline: null,
            tna_Anime: null,
            i_Anime: null,
        }
    },
    computed: {
        ...mapState(['dayMode'])
    },
    mounted() {
        this.triggerAnimation()
    },
    methods: {
        triggerAnimation() {
            if(this.dayMode) {
                if(this.toNightTimeline) {
                    this.toNightTimeline.restart()
                    this.toNightTimeline.pause()
                    this.pauseAnimation()
                }
                this.toDay() 
            } else {  
                if(this.toDayTimeline) {
                    this.toDayTimeline.restart()
                    this.toDayTimeline.pause()
                    this.pauseAnimation()
                }
                this.toNight()
            }
        },
        pauseAnimation() {
            this.tna_Anime.restart()
            this.i_Anime.restart()
            this.tna_Anime.pause()
            this.i_Anime.pause()
        },
        changeMode() {
            this.$store.commit('updateDayMode')
            this.triggerAnimation()
        },
        toNight() {
            this.$refs.nam.style.color = '#003A2B'
            this.$refs.rect.style.backgroundColor = '#003A2B'
            // spring => 震動幅度 ; 彈跳的軟硬程度 ; 減震 ;速度(會影響震動幅度)
            // Create a timeline with default parameters
            this.toNightTimeline = this.$anime.timeline({});

            // Add children
            this.toNightTimeline
            .add({
                targets: this.$refs.circle,
                keyframes: [
                    {translateY: -5},
                    {translateY: 40},
                ],
                easing: 'spring(1, 80, 15, 5)',
                duration: 1000,
            })
            .add({
                targets: this.$refs.circle,
                keyframes: [
                    {translateY: 5},
                    {translateY: 40},
                ],
                easing: 'spring(1, 80, 15, 5)',
                duration: 800,
            })
            .add({
                targets: this.$refs.circle,
                keyframes: [
                    {translateY: 15},
                    {translateY: 40},
                ],
                easing: 'spring(1, 100, 50, 0)',
                duration: 900,
            })

            this.tna_Anime = this.$anime({
                targets: this.$refs.nam,
                color: '#fff',
                easing: 'spring(1, 0, 80, 20)',
                autoplay: false,
            })

            this.i_Anime = this.$anime({
                targets: this.$refs.rect,
                backgroundColor: '#fff',
                easing: 'spring(1, 0, 80, 20)',
                autoplay: false,
            })

            this.toNightTimeline.finished.then(() => {
                this.tna_Anime.play()
                this.i_Anime.play()
            })
            
        },
        toDay() {
            this.$refs.nam.style.color = '#ffffff'
            this.$refs.rect.style.backgroundColor = '#ffffff'
            // Create a timeline with default parameters
            this.toDayTimeline = this.$anime.timeline({});

            // Add children
            this.toDayTimeline
            .add({
                targets: this.$refs.circle,
                keyframes: [
                    {translateY: -5},
                    {translateY: 40},
                ],
                easing: 'spring(1, 80, 15, 5)',
                duration: 1000,
            })
            .add({
                targets: this.$refs.circle,
                keyframes: [
                    {translateY: 5},
                    {translateY: 40},
                ],
                easing: 'spring(1, 80, 15, 5)',
                duration: 800,
            })
            .add({
                targets: this.$refs.circle,
                keyframes: [
                    {translateY: 15},
                    {translateY: 40},
                ],
                easing: 'spring(1, 100, 50, 0)',
                duration: 900,
            })

            this.tna_Anime = this.$anime({
                targets: this.$refs.nam,
                color: '#003A2B',
                easing: 'spring(1, 0, 80, 20)',
                autoplay: false,
            })

            this.i_Anime = this.$anime({
                targets: this.$refs.rect,
                backgroundColor: '#003A2B',
                easing: 'spring(1, 0, 80, 20)',
                autoplay: false,
            })

            this.toDayTimeline.finished.then(() => {
                this.tna_Anime.play()
                this.i_Anime.play()
            })
        },
    },
}
</script>

<style scoped>
.wrap {
    width: 100%;
    box-sizing: border-box;
    min-height: 100vh;
    padding: 20px 50px 20px 100px; 
}

.hi-title {
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
    font: bold 130px Lato;
    color: #00ffbf;
    text-shadow: rgb(0, 160, 120) 5px 5px;
}

.hi-title.night {
    color: #7700ff;
    text-shadow: rgb(222, 166, 255) 5px 5px;
}

.nam-amine {
    /* background-color: rgb(0, 81, 255); */
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
    letter-spacing: 5px;
    font: bold 230px Lato;
    position: relative;
    /* color: #1C1C1C; */
    color: rgb(0, 160, 120);
}

.nam {
    color: rgb(0, 160, 120);
}

.nam {
    display: flex;
}

.circle {
    width: 36px;
    height: 36px;
    background-color: rgb(255, 238, 0);
    border-radius: 50%;
    position: absolute;
    top: 15px;
    left: 152px;
}

svg {
    position: absolute;
    top: 107px;
    left: 152px;
}

.rect {
    position: absolute;
    top: 107px;
    left: 155px;
    width: 29px;
    height: 124px;
    box-sizing: border-box;
    background-color: #3a3a3a;
}

@media screen and (max-width: 650px) {
  .hi-title {
      transform: scale(0.7);
  }  

  .nam-amine {
      transform: scale(0.55);
  }  

  .wrap {
      padding: 20px 50px 20px 20px; 
  }
}

</style>
