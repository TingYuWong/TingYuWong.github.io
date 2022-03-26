<template>
    <div class="wrap">
        <img src="@/assets/image/logo.png"/>
        <div class="hint-wrap">
            <div class="hint">Contact Me >> </div>
            <div class="hint">Email: sandy20615@gmail.com / </div>
            <img src="@/assets/image/github.png" @click="toWebSite('https://github.com/TingYuWong')"/>
            <img src="@/assets/image/linkedin.png" @click="toWebSite('https://www.linkedin.com/in/tingyuwong1012/')"/>
            <div class="hint" @click="toWebSite('https://www.cakeresume.com/sandy20615')">CakeResume</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Message',
    methods: {
        toWebSite(url) {
            window.open(url)
        },
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
    /* background-color: rgb(209, 209, 209); */
}

img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    cursor: pointer;
}

.hint-wrap {
    display: flex;
    align-items: center;
}

.hint {
    font: 10px 'Red Hat Mono';
    text-align: left;
    color: rgb(124, 124, 124);
    margin-right: 10px;
    cursor: pointer;
}
</style>