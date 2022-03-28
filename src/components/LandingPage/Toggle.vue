<template>
    <div class="toggle-wrap" @click="changeMode">
        <div class="toggle" :class="(dayMode) ? 'day' : 'night'" ref="toggle">
            <div ref="circle" class="circle"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Toggle',
    data() {
        return {
            animeConfig: {
                Day: { translateX: 0, toggleColor: '#4158D0'},
                Night: { translateX: -64, toggleColor: '#BFE8FF'},
            },
            easing: 'spring(1, 80, 15, 5)',
        }
    },
    computed: {
        ...mapState(['dayMode'])
    },
    methods: {
        changeMode() {
            console.log('TINA animation!!')
            this.startAnimation()
            this.$emit('changeMode')
        },
        circleTransform(targets, translateX) {
            this.$anime({
                targets,
                translateX,
                easing: this.easing,
            })
        },
        toggleColorChange(targets, color) {
            this.$anime({
                targets,
                backgroundColor: color,
                borderColor: color,
                easing: this.easing,
                delay: 100,
            });
        },
        startAnimation() {
            let mode = (this.dayMode) ? 'Day' : 'Night'
            this.circleTransform(this.$refs.circle, this.animeConfig[mode].translateX)
            this.toggleColorChange(this.$refs.toggle, this.animeConfig[mode].toggleColor)
        },
    },
}
</script>

<style scoped>
.toggle-wrap {
    display: flex;
    justify-content: flex-end;
    height: 40px;
    width: 100%;
    cursor: pointer;
}

.toggle {
    width: 100px;
    height: 100%;
    border: 1px solid #4158D0;
    background-color: #4158D0;
    border-radius: 50px;
    position: relative;
}

.circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    right: 0px;
}

.toggle.day .circle {
    background-color: rgb(255, 238, 0);
    box-shadow: 0px 0px 3px rgb(223, 208, 0);
}

.toggle.night .circle {
    background-color: rgb(219, 218, 196);
    box-shadow: 0px 0px 3px rgb(168, 168, 159);
}

.hint {
    color: rgb(65, 126, 126);
    text-align: right;
    font-size: 14px;
    margin-top: 3px;
    word-break: normal;
}
</style>