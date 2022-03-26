<template>
    <div class="toggle-wrap" @click="changeMode">
        <div class="toggle" :class="(dayMode) ? 'day' : 'night'" ref="toggle">
            <div ref="circle" class="circle"></div>
        </div>
    </div>
    <div class="hint">Use Chrome for better experience</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Toggle',
    computed: {
        ...mapState(['dayMode'])
    },
    methods: {
        changeMode() {
            this.triggerAnimation()
            this.$emit('changeMode')
        },
        triggerAnimation() {
            if(this.dayMode) { this.toDay() } else { this.toNight() }
        },
        toNight() {
            this.$anime({
                targets: this.$refs.circle,
                translateX: -64,
                easing: 'spring(1, 80, 15, 5)',
            })
            this.$anime({
                targets: this.$refs.toggle,
                backgroundColor: '#BFE8FF',
                borderColor: '#BFE8FF',
                easing: 'spring(1, 80, 15, 5)',
                delay: 100,
            });
        },
        toDay() {
            this.$anime({
                targets: this.$refs.circle,
                translateX: 0,
                easing: 'spring(1, 80, 15, 5)',
            })
            this.$anime({
                targets: this.$refs.toggle,
                backgroundColor: '#4158D0',
                borderColor: '#4158D0',
                easing: 'spring(1, 80, 15, 5)',
                delay: 100,
            })
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
}
</style>