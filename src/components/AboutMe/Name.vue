<template>
    <div class="line-drawing-wrap">
        <Twinkly class="T" />
        <Inspiring class="I" />
        <Newborn class="N" />
        <Adventurous class="A" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Inspiring from './Inspiring.vue'
import Twinkly from './Twinkly.vue'
import Newborn from './Newborn.vue'
import Adventurous from './Adventurous.vue'

export default {
    name: 'Name',
    components: {
        Twinkly,
        Inspiring,
        Newborn,
        Adventurous
    },
    data() {
        return {
            toDayTimeline: null,
            toNightTimeline: null,
        }
    },
    mounted() {
        this.drawNightText()
    },
    computed: {
        ...mapState(['dayMode'])
    },
    watch: {
        dayMode() {
            if(this.dayMode) {
                this.drawDayText()
            } else {
                this.drawNightText()
            }
        },
    },
    methods: {
        drawDayText() {
            if(this.toNightTimeline) { 
                this.toNightTimeline.restart()
                this.toNightTimeline.pause()
            }

            this.toDayTimeline = this.$anime.timeline({
                easing: 'easeInOutCubic',
                duration: 1200,
                delay: function(el, i) { return i * 250 },
                direction: 'alternate',
                loop: true
            })

            this.toDayTimeline
            .add({
                targets: '.T path',
                strokeDashoffset: [this.$anime.setDashoffset, 0],
                // fill: this.purple,
            })
            .add({
                targets: '.I path',
                strokeDashoffset: [this.$anime.setDashoffset, 0],
                // fill: this.purple,
            })
            .add({
                targets: '.N path',
                strokeDashoffset: [this.$anime.setDashoffset, 0],
                // fill: this.purple,
            })
            .add({
                targets: '.A path',
                strokeDashoffset: [this.$anime.setDashoffset, 0],
                // fill: this.purple,
            })
        },
        drawNightText() {
            if(this.toDayTimeline) { 
                this.toDayTimeline.restart()
                this.toDayTimeline.pause()
            }

            this.toNightTimeline = this.$anime.timeline({
                easing: 'easeInOutCubic',
                duration: 1200,
                delay: function(el, i) { return i * 250 },
                direction: 'alternate',
                loop: true
            })

            this.toNightTimeline
            .add({
                targets: '.T path',
                strokeDashoffset: [this.$anime.setDashoffset, 0],
                // fill: (this.dayMode) ? 'rgba(115, 54, 252, 1)' : 'rgba(149, 217, 218, 0.2)',
                // fill: this.green,
            })
            .add({
                targets: '.I path',
                strokeDashoffset: [this.$anime.setDashoffset, 0],
                // fill: this.green,
            })
            .add({
                targets: '.N path',
                strokeDashoffset: [this.$anime.setDashoffset, 0],
                // fill: this.green,
            })
            .add({
                targets: '.A path',
                strokeDashoffset: [this.$anime.setDashoffset, 0],
                // fill: this.green,
            })
        },
    },
}
</script>

<style scoped>
.line-drawing-wrap {
    display: flex;
    flex-direction: column;
}

.I, .A {
    align-self: flex-end;
}

.T, .I,.N, .A {
        transform: scale(0.9);
    }

svg {
    margin-bottom: 10px;
}

@media screen and (max-width: 650px) {
    .T, .I,.N, .A {
        transform: scale(0.5);
        margin-top: -30px;
    }
}

@media screen and (max-width: 530px) {
    .T, .I,.N, .A {
        transform: scale(0.3);
        margin-top: -30px;
    }
}
</style>