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
            toDayTimeline: null,
            toNightTimeline: null,
            tna_Anime: null,
            i_Anime: null,
            animeConfig: {
                Day: { initialColor: '#fff', tinaColor: '#003A2B'},
                Night: { initialColor: '#003A2B', tinaColor: '#fff'},
            },
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
            let timeline = (this.dayMode) ? this.toNightTimeline : this.toDayTimeline
            let mode = (this.dayMode) ? 'Day' : 'Night'
            if(timeline) { this.pauseAnimation(timeline) }
            this.startAnimation(mode)
        },
        pauseAnimation(timeline) {
            timeline.restart()
            timeline.pause()
            this.tna_Anime.restart()
            this.i_Anime.restart()
            this.tna_Anime.pause()
            this.i_Anime.pause()
        },
        startAnimation(typ) {
            this.setInitialColor(this.animeConfig[typ].initialColor)
            this[`to${typ}Timeline`] = this.timelineAnimate()
            this.changeTINAcolor(this.animeConfig[typ].tinaColor)
            this[`to${typ}Timeline`].finished.then(() => {
                this.tna_Anime.play()
                this.i_Anime.play()
            })
        },
        changeMode() {
            this.$store.commit('updateDayMode')
            this.triggerAnimation()
        },
        timelineAnimate() {
            // spring => 震動幅度 ; 彈跳的軟硬程度 ; 減震 ;速度(會影響震動幅度)
            let timeline = this.$anime.timeline({});
            timeline
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
            return timeline
        },
        setInitialColor(color) {
            this.$refs.nam.style.color = color
            this.$refs.rect.style.backgroundColor = color
        },
        changeTINAcolor(color) {
            let easing = 'spring(1, 0, 80, 20)'

            this.tna_Anime = this.$anime({
                targets: this.$refs.nam,
                color: color,
                easing,
                autoplay: false,
            })

            this.i_Anime = this.$anime({
                targets: this.$refs.rect,
                backgroundColor: color,
                easing,
                autoplay: false,
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
