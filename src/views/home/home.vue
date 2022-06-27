<template>
    <div class="home">
        <!-- 背景色块 -->
        <div class="bg">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
        <!-- 头部 -->
        <div class="header">
            <img src="../../assets/imgs/icon_menu.png">
        </div>

        <!-- 广告 -->
        <div class="banner">
            <p class="ft-14 cl-white">Mirroring Cast screen</p>
            <p class="ft-12 cl-grey">Real-time screen sharing</p>
            <div class="img-wrap">
                <img src="../../assets/imgs/人物-电视.png" alt="">
            </div>
        </div>

        <!-- 功能选项 -->
        <div class="option-wrap">
            <div class="choose">
                <div class="choose-l">
                    <p class="ft-14 cl-white">Please choose</p>
                    <p class="ft-12 cl-grey">Choose a screencast scence</p>
                </div>
                <div class="choose-r">
                    <img src="../../assets/imgs/微信.png">
                </div>
            </div>
            <div class="option">
                <div class="option-l">
                    <img src="../../assets/imgs/icon_1.png">
                </div>
                <div class="option-r">
                    <p class="ft-14 cl-grey">Screen mirroring</p>
                    <p class="ft-14 cl-grey">Mobile screen sharing to TV</p>
                </div>
            </div>
            <div class="option mt-20">
                <div class="option-l">
                    <img src="../../assets/imgs/icon_1.png">
                </div>
                <div class="option-r">
                    <p class="ft-14 cl-grey">Screen mirroring</p>
                    <p class="ft-14 cl-grey">Mobile screen sharing to TV</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
}
</script>
<style scoped>
.home {
    height: 100vh;
}

.bg {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    position: absolute;
    z-index: -1;
    width: 100vw;
    border-radius: 2rem;
    overflow: hidden;
}

.bg .item {
    height: 100vh;
}

.item:nth-child(even) {
    background: #7266fa;
}

.item:nth-child(2n-1) {
    background: #7f70fe;
}

.header {
    padding: 1.4rem 2.2rem;
}

.banner p {
    padding: 0.4rem 3.5rem;
}

.banner .img-wrap {
    padding: 0 5rem;
}

.banner .img-wrap>img {
    position: relative;
    top: -2rem;
    height: 28.8rem;
    width: 100%;
}

.option-wrap {
    padding:1.8rem 2.4rem;
    box-sizing: border-box;
    background: #8175fb;
}

.option-wrap{
    border-radius: 2rem;
    overflow: hidden;
}

.option-wrap .choose {
    padding: 1.6rem;
    display: grid;
    grid-template-columns: auto 2.4rem;
}

.choose .choose-l>p {
    padding: 0.4rem 0;
}

.choose .choose-r {
    display: flex;
    align-items: center;
}

.option{
    padding: 4rem 2rem;
    border-radius: 2rem;
    background: #fff;
    display: grid;
    grid-template-columns: 5.6rem auto;
}
.option-l{
    border-radius: 50%;
    overflow: hidden;
}

.option-r{
    box-sizing: border-box;
    padding-left: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.mt-20{
    margin-top: 2rem;
}
</style>