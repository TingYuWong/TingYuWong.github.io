<template>
    <div class="wrap">
        <div class="title">Education</div>
        <div class="row">
            <div class="content">
                <div class="paragraph">Degree</div>
                <div class="paragraph">
                    <div class="item">National Chengchi University Bachelor</div>
                    <div class="item">Double Major: Psychology / Digital Content and Technologies ; Minor in Korean Language and Literature</div>
                    <div class="item">2016-2020 政大心理系 雙主修 數位內容學程 輔韓文系</div>
                </div>
                <div class="paragraph">Projects</div>
                <div class="paragraph">
                    <div class="item">UI: online course on coursera</div>
                    <div class="item">UX: Trans-Action award Top 20 跨界超越競賽前20強</div>
                    <div class="item">Adobe AI/AE: visual design / motion graphic</div>
                    <div class="item">Program: Arduino / Web Development</div>
                </div>
            </div>
            <img class="camp" src="@/assets/image/camp.png"/>
        </div>
        <h2>Thanks to these projects, I had the opportunities to learn different things and finally set my direction when navigating through a variety of career options.</h2>
    </div>
</template>

<script>
export default {
    name: 'Education',
}
</script>

<style scoped>
.wrap {
    min-height: 700px;
    padding-left: 80px;
    padding-right: 80px;
}

.content {
    padding-right: 10%;
    text-align: left;
    color: #14213d;
    box-sizing: border-box;
}

.paragraph {
    margin-bottom: 30px;
}

.row {
    display: flex;
    gap: 20px;
}

.item {
    padding: 5px 10px;
    box-sizing: border-box;
    border-left: 3px solid #f28482;
}

.camp {
    width: 30%;
    object-fit: contain;
    animation: rotateimg 3s infinite;
    animation-play-state: paused;
}

.camp:hover {
    animation-play-state: running;
}

@keyframes rotateimg {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@-webkit-keyframes rotateimg {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>



