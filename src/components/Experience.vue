<template>
    <div class="wrap">
        <div class="title">Experience 2020/11- (1yrs +)</div>
        <div class="content">
            <h2>Front-End Developer</h2>
            <div class="tag-wrap">
                <div class="tag" v-for="(item, index) in skills" :key="index">{{ item }}</div>
            </div>
            <div class="paragraph">
                <p>1. Tung General Hospital 台中童綜合醫院</p>
                <div>Building web application with vue / Participating from planning to implementation and maintenance / Screwing up a project with agile and Scrum</div>
                <p>以vue2和vue3開發網頁，負責的內容：從使用者訪談、需求整理，到實作給護理師使用的網頁，團隊採用敏捷工作流程，搭配trello掌握工作進度</p>
                <div class="item">Anesthesia System 麻醉作業系統</div>
                <div class="item">d3.js: draw axis, grids and data / reportlab: create PDF</div>
                <div class="item">主要技術：以d3開發原先以紙本型式記錄的表格，讓護理師可以在網頁上操控時間軸，並畫上病人的生命徵象等數據 / 使用reportlab產出紀錄單的PDF</div>
                <div class="item"></div>
                <div class="item" style="margin-top: 10px;">Intensive Care Unit System 加護病房作業系統</div>
                <div class="item">websocket: Push notifications in real time / robot framework: e2e testing</div>
                <div class="item">主要技術：串接websocket，即時通知護理師病人最新狀況 / robot framework 端對端測試</div>
            </div>
            <div class="paragraph">
                <p>2. BOVIA CO., LTD.(博遠智能科技股份有限公司)</p>
                <div>Building web application with vue</div>
                <p>以vue2開發網頁，負責的內容：開發網頁語音通話、控制影片播放的時間軸進度條</p>
                <div class="item">桃園市政府警察局 AI巡防系統</div>
                <div class="item">webRTC and websocket: Web-to-web calling / d3.js: video player timeline</div>
                <div class="item">主要技術：網頁語音通話、控制影片播放的時間軸進度條</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Experience',
    data() {
        return {
            skills: [
                'd3', 'e2e testing', 'websockt', 'webRTC', 'repotlab',
                'vue', 'gitlab', 'github', 'agile', 'trello', 'html', 'css', 'js', 'memory leak'
            ],
        }
    },
}
</script>

<style scoped>
.wrap {
    width: 100%;
    min-height: 700px;
    box-sizing: border-box;
    padding: 0px 80px;
}

.paragraph {
    margin-bottom: 30px;
}

.content {
    text-align: left;
}

.item {
    padding: 5px 10px;
    box-sizing: border-box;
    border-left: 3px solid #f28482;
}

.tag-wrap {
    display: flex;
    flex-wrap: wrap;
}

.tag {
    padding: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: #14213d;
    color: #fff;
}
</style>