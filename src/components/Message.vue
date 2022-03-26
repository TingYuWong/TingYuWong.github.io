<template>
    <div class="wrap">
        <img src="@/assets/image/logo.png"/>
        <div class="hint-wrap">
            <div class="hint">Using Chrome for better experience if you will.</div>
            <div class="hint">Cuz D3 zoom would break in Safari.</div>
            <div class="hint">And I'm still working on solving this problem.</div>
            <div class="hint">Feel free to contact me if you find anything I need to fix</div>
            <div class="hint">or are willing to share how to fix with me!</div>
            <div class="hint">Here's my email: sandy20615@gmail.com! Hope you enjoy:D</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Message',
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