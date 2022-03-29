<template>
    <div class="wrap">
        <img src="@/assets/image/logo.png"/>
        <div class="hint-wrap">
            <div class="hint" v-for="(msg, index) in msgArr" :key="index">{{ msg }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            msgArr: [
                "Feel free to contact me if you find anything I need to fix",
                "or are willing to share how to fix with me!",
                "Here's my email: sandy20615@gmail.com! Hope you enjoy:D",
            ],
        }
    },
}
</script>

<style scoped>
.wrap {
    width: 100%;
    padding: 10px 10px;
    background-color: rgba(255, 255, 255, 0.582);
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    max-width: 100px;
    height: 100%;
    margin-right: 10px;
}

.hint {
    font: 10px 'Red Hat Mono';
    text-align: left;
    color: rgb(124, 124, 124);
}
</style>