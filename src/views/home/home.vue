<template>
    <div class="home">

        <!-- 头部 -->
        <div class="header">
            <div class="header-left">
                <img class="icon" src="../../assets/imgs/icon_left_arrow.png">
            </div>
            <h1 class="ft-14">Local screencast</h1>
            <div></div>
        </div>

        <!-- 搜索框 -->
        <div class="search">
            <input type="text" placeholder="search">
            <div class="search-icon">
                <img class="icon" src="../../assets/imgs/icon_search.png">
            </div>
        </div>

        <!-- banner图 -->
        <div class="banner">
            <div class="banner-l">
                <img src="../../assets/imgs/waaw.png" alt="">
            </div>
            <div class="banner-r">
                <p class="ft-20">Mirror guide</p>
                <p class="ft-14">common problem</p>
            </div>
        </div>

        <!-- scroll图 -->
        <div class="scroll">
            <div class="scroll-wrap">
                <div class="item bg-blue" v-for="item in 5" :key="item">
                    <div class="icon-wrap">
                        <img class="icon-32" src="../../assets/imgs/icon_file.png" alt="">
                    </div>
                    <p class="ft-16 cl-white">Picture</p>
                    <p class="ft-16 cl-grey">Local screencast</p>
                </div>
            </div>
        </div>

        <!-- 底部 -->
        <div class="btm">
            <div class="btm-t">
                <div class="left">
                    <img  src="../../assets/imgs/icon_1.png" alt="">
                </div>
                <div class="right">
                    <p class="ft-16">Screen mirroring</p>
                    <p class="ft-14 cl-grey">Mobile screen sharing to TV</p>
                </div>
            </div>
            <div class="btm-b">
                <div class="btn">
                    <img class="icon-24" src="../../assets/imgs/icon_stop.png">
                    <p class="ft-16 ml-10">Time Out</p>
                </div>
                <div class="btn">
                    <img class="icon-24" src="../../assets/imgs/icon_end.png">
                    <p class="ft-16 ml-10">End</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data() {
       return{}; 
    },
}
</script>

<style scoped>
.home{
    padding:2.5rem;
    background: #d8cbf7;
    border-radius: 2rem;
}
.header{
    padding: 1.5rem 0;
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
}
.header h1{
    display: flex;
    align-items: center;
    justify-content: center;
}
.header-left{
    display: flex;
    align-items: center;
}

.search{
    margin: 0.8rem 0;
    display: grid;
    border-radius: 2rem;
    overflow: hidden;
    grid-template-columns: 4fr 1fr;
    font-size: 1.4rem;
}

.search input{
    outline: none;
    border: none;
    font-size: 1.6rem;
    text-indent: 1em;
}
.search-icon{
    padding: 1.6rem 2.5rem;
    background: #fff;
}

.banner{
    display: grid;
    grid-template-columns: 13.2rem auto;
    border-radius: 8rem;
    padding: 2.6rem 0;
    margin: 3.6rem 0;
    background: #eceaff;
}

.banner-l{
    position: relative;
}
.banner-l img{
    width: 11.2rem;
    position: absolute;
    top: -4.2rem;
    left: 1.5rem;
}
.banner-r p{
    padding: 0.4rem 0;
}
.ft-20{
    font-size: 2rem;
}
.pd-25{
    padding: 0 2.5rem;
}

.item{
    padding: 2.6rem 1.4rem;
    width: 13.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    margin-right: 1.6rem;
}
.item .icon-wrap{
    padding: 1.6rem;
    background: #ccc;
    border-radius: 2rem;
}

.item p{
    text-align: center;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    padding: 0.5rem 0;
}

.icon-32{
    width: 3.2rem;
}
.scroll{
    overflow-x: auto;
}

.scroll-wrap{
    display: flex;
    flex-wrap: nowrap;
}

::-webkit-scrollbar{
    display:none;
}
.btm{
    margin-top:3.6rem;
    background: #e5e2ff;
    border-radius: 2rem;
}
.btm-t{
    padding: 3.8rem 2rem;
    background: #fff;
    border-radius: 2rem;
    display: grid;
    grid-template-columns: 5.5rem auto;
}
.btm-t .left{
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    overflow: hidden;
}

.btm-t .left img{
    width: 100%;
}
.btm-t .right{
    padding: 0 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.btm-t .right p{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}

.btm-b{
    padding: 2.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.btm-b .btn{
    padding: 1.6rem 3rem;
    display: flex;
    background: #fff;
    border-radius: 2rem;
}
</style>