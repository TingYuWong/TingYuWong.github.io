<template>
    <div class="wrap">
        <div class="title" :class="{ night: !dayMode }" style="align-self: flex-start;">Experience</div>
        <div class="content" ref="timebar">
            <div class="detail" :class="{ night: !dayMode }">
                <div class="text" v-if="detailObj[chosenTim]">{{ detailObj[chosenTim].text }}</div>
            </div>
            <svg class="time-svg" :class="{ night: !dayMode }">
                <g class="timeaxis"/>
                <g class="timeline"/>
            </svg>
            <div class="time" :class="{ night: !dayMode }">{{ chosenTim }}</div>
        </div>
    </div>
</template>

<script>
import * as d3 from 'd3';
import { mapState } from 'vuex'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                zoom: null,
                zoomX: null,
                width: 0,
                height: 300,
                axisTopMargin: -1,
                detailObj: {
                    '2020/November': { text: "Start my <career/> at Tung's Hospital", typ: 1 },
                    '2020/December': { text: "Make interactive forms through D3.js", typ: 1 },
                    '2021/January': { text: "Make interactive forms through D3.js", typ: 1 },
                    '2021/February': { text: "Make interactive forms through D3.js", typ: 1 },
                    '2021/March': { text: "Produce PDF through Python ReportLab", typ: 1 },
                    '2021/April': { text: "Produce PDF through Python ReportLab", typ: 1 },
                    '2021/May': { text: "Learn Vue3 and make a simple todo list", typ: 1 },
                    '2021/June': { text: "Make a simple trello clone", typ: 1 },
                    '2021/July': { text: "Build a new website from scratch through Vue3", typ: 1 },
                    '2021/August': { text: "Robot Framework E2E Testing", typ: 1 },
                    '2021/September': { text: "First-Time intern manager", typ: 1 },
                    '2021/October': { text: "Start piecework at Bovia", typ: 2 },
                    '2021/November': { text: "Develop audio call on web through webRTC and WebSocket", typ: 2 },
                    '2021/December': { text: "Study and Fix memory leak", typ: 1 },
                    '2022/January': { text: "Customize video player through D3.js", typ: 2 },
                    '2022/February': { text: "Customize video player through D3.js", typ: 2 },
                    '2022/March': { text: "Study web performance and Optimize the website from 64 to 95 points on lighthouse tab", typ: 1 },
                    '2022/April': { text: "Learning React.js, Typescript, Unit Test and Algorithm on frontend masters", typ: 1 },
                    '2022/May': { text: "Developing a weather website with React / Learning algorithm", typ: 1 },
                },
            }
        },
        beforeMount() {
            this.zoomX = this.x
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.reAssignWidth)
        },
        mounted() {
            window.addEventListener('resize', this.reAssignWidth)
            this.zoom = d3.zoom().on('zoom', this.panX)
            d3.select('.time-svg').call(this.zoom).on('dblclick.zoom', null)
            this.width = this.$refs.timebar.clientWidth
        },
        watch: {
            width() {
                this.updateAxis()
                this.drawTimeline()
                this.drawCircle()
            },
            dayMode() {
                this.drawAxis()
                this.drawTimeline()
                this.drawCircle()
            },
        },
        computed: {
             ...mapState(['dayMode']),
            x() {
                let s = new Date(2020, 8)
                let e = new Date(2021, 1)
                return d3
                .scaleTime()
                .domain([s, e])
                .range([0, 700])
            },
            xAxis() {
                return d3
                .axisBottom(this.zoomX)
                .tickFormat((tim) => {
                    return d3.timeFormat('%Y/%B')(tim)
                })
                .ticks(d3.timeMonth.every(1))
            },
            chosenTim() {
                return d3.timeFormat('%Y/%B')(this.zoomX.invert(this.width / 2))
            },
            newDateTim() {
                let time = this.zoomX.invert(this.width / 2)
                let m = new Date(time).getMonth()
                let y = new Date(time).getFullYear()
                return new Date(y, m)
            },
        },
        methods: {
            drawCircle() {
                if(!this.detailObj[this.chosenTim]) {
                    d3.selectAll('.focus-circle').remove()
                    return
                }
                let h = {
                    1: this.height - 175,
                    2: this.height - 75,
                }
                let color = (!this.dayMode) ? '#ff6e7f' : '#79CBCA'
                d3.selectAll('.focus-circle').remove()
                d3.select('.timeline')
                .append('circle')
                .attr('class', 'focus-circle')
                .attr('cx', this.zoomX(this.newDateTim))
                .attr('cy', h[this.detailObj[this.chosenTim].typ])
                .attr('r', 20)
                .attr('fill', color)
                .attr('filter', `drop-shadow(0px 0px 20px ${color})`)
            },
            panX(e) {
                let t = d3.zoomIdentity.translate(e.transform.x, 0).scale(1); // 只平移x軸不作縮放
                if(this.constrainZoom(t)) return
                let newX = t.rescaleX(this.x)
                this.zoomX = newX
                this.updateAxis()
                this.drawTimeline()
                this.drawCircle()
            },
            countDomainTim(x, index) {
                let time = x.domain()[index]
                let y = new Date(time).getFullYear()
                let m = new Date(time).getMonth()
                return new Date(y, m)
            },
            constrainZoom(t) {
                let d1 = this.countDomainTim(this.x, 0)
                let d2 = this.countDomainTim(this.zoomX, 1)
                if(t.x > 0 && new Date(d1) < new Date(2020,9)) {
                    this.setInitialDomain()
                }
                if(t.x < 0 && new Date(d2) > new Date(2022,7)) {
                    this.setInitialDomain()
                    return true
                }
                return false
            },
            setInitialDomain() {
                let svg = d3.select('.time-svg')
                svg.call(
                    this.zoom.transform,
                    d3.zoomIdentity
                    .translate(0, 0)
                    .scale(1)
                );
            },
            reAssignWidth() {
                this.width = this.$refs.timebar.clientWidth
            },
            updateAxis() {
                this.zoomX.range([0, this.width])
                this.drawAxis()
            },
            drawAxis() {
                d3.select('.timeaxis')
                .classed('night', !this.dayMode)
                .attr('transform', 'translate(0,' + this.axisTopMargin + ')')
                .call(this.xAxis)
            },
            drawTimeline() {
                let firstX = this.zoomX(new Date(2020, 10))
                let secondX = this.zoomX(new Date(2021, 9))
                let firstWidth = this.zoomX(new Date(2022, 5)) - firstX
                let secondWidth = this.zoomX(new Date(2022, 3)) - secondX

                const data = [
                    { width: firstWidth, x: firstX, y: 200 },
                    { width: secondWidth, x: secondX, y: 100 }
                ]

                let line_L, line_S;
                d3.selectAll('.timeline-data').remove();
                line_L = d3.select('.timeline');
                line_S = g =>
                    g
                    .selectAll('.timeline-data')
                    .data(data)
                    .join(
                        enter =>
                        enter
                            .append('rect')
                            .attr('class', 'timeline-data')
                            .attr('width', d => d.width)
                            .attr('height', 50)
                            .attr('fill', '#fff')
                            .attr('x', d => d.x)
                            .attr('y', d => this.height - d.y)
                            .attr('rx', 25)
                            .attr('ry', 25)
                            .on('mouseover', function() {
                                d3.select(this).transition().duration(150)
                                .attr('filter', 'drop-shadow(0px 0px 20px #fff)')
                            })
                            .on('mouseout', function() {
                                d3.select(this).transition().duration(150)
                                .attr('fill', '#fff')
                                .attr('filter', 'none')
                            }),

                        update => update,
                        exit => exit.on("mouseover", null)
                                    .on("mouseout", null).remove()
                    );

                line_L.call(line_S);
                line_L = null;
                line_S = null;
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrap {
        min-height: 100vh;
        padding-left: 80px;
        padding-right: 80px;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .content {
        width: 90%;
        min-height: 600px;
        height: 600px;
        /* border: 2px solid cornflowerblue; */
    }

    .time-svg {
        width: 100%;
        height: 300px;
        border: 2px solid cornflowerblue;
        box-sizing: border-box;
        border-left: none;
        border-right: none;
        /* background-color: rgba(255, 255, 255, 0.2); */
    }

    .time-svg.night {
        border-color:#eee;
    }

    .timeline :deep(.timeline-data) {
        cursor: pointer;
    }

    .detail {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .detail .text {
        padding: 20px;
        font: 20px 'Red Hat Mono';
        color: #fff;
        border-radius: 20px;
        box-shadow: 0 0 20px rgb(245, 232, 253);
        background-size: 200% auto;
        transition: 0.5s;
        background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%)
    }

    .detail.night .text {
        color: #fff;
        background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%)
    }

    .detail:hover .text {
        background-position: right center;
        cursor: default;
    }
    
    .time {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font: bold 20px 'Red Hat Mono';
        color: cornflowerblue;
    }

    .time.night {
        color: #fff;
    }

    @media screen and (max-width: 650px) {
        .detail .text {
            font-size: 15px;
        }
    }
         
</style>

<style>
.tick text{
    color: cornflowerblue;
}

.night .tick text {
    color: #fff;
}

.tick line {
    stroke: cornflowerblue;
}

.night .tick line {
    stroke: #fff;
}

.domain {
    stroke: transparent;
}
</style>