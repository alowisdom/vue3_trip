<script setup>
import { useRouter } from 'vue-router';



    const router = useRouter()
     const clickCity = () => {
        router.push('/city')
     }
</script>

<template>
    <div class="search">

        <div class="destination">

            <div class="city">
                <span @click="clickCity">新加坡</span>
            </div>

            <div class="position">
                <input type="text">
            </div>

        </div>

        <div class="date">
            <div class="time">
                <span>5月18日-6月21日共34晚</span>
            </div>
            <div class="count">
                <span>人数</span>
            </div>
        </div>

        <div class="tips">
            <span>可以做饭</span>
            <span>整套房源</span>
            <span>自助入住</span>
        </div>

        <div class="searchBtn">
            <button class="btn">
                <span>&</span>
                <span>搜索房源</span>
            </button>
        </div>

    </div>
</template>

<style scoped lang='less'>
     .search {
        border: 1px solid #ccc;
        margin: 5px 15px;
        padding: 0 10px;
        background-color: #fff;
        border-radius: var(--primary-radius);
        font-size: 14px;
        
        .destination {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            padding: 3px 5px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 2px;

            .city {
                width: 100px;
                padding: 2px 10px;
                margin-block: 2px;
                margin-right: 2px;
                border-right: 1px solid #ccc;
                font-size: 16px;
            }

            .position {
                width: 100%;

                input {
                    width: 100%;
                    // background-color: pink;
                    padding: 8px;
                    border: none;
                    font-size: 18px;
                }

            }


        }

        .date {
            display: flex;
            padding: 2px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 5px;
            // height: 30px;

            .time {
                width: 100%;
                margin: 7px;
                padding: 1px;
                // background-color: pink;
                // border-right: 1px solid #ccc;
                // line-height: 40px;
            }

            .count {
                width: 90px;
                border-left: 1px solid #ccc;
                // padding-left: 5px;
                // background-color: blue;
                // line-height: 40px;
                margin: 7px;
                padding: 1px;
                text-align: center;
                
            }
        }

        .tips {
            display: flex;
            gap: 5px;
            margin-block: 10px;
            font-size: 12px;
            span {
                border: 1px solid #ccc;
                padding: 4px 6px;
                border-radius: var(--secondary-radius);
            }
        }

        .searchBtn {
            margin-top: 10px;
            margin-bottom: 15px;

            .btn {
                width: 100%;
                border: none;
                padding-block: 10px;
                border-radius: var(--secondary-radius);
                background-color: var(--secondary-color);
                color: #fff;
                font-size: 14px;
            }
        }

     }
</style>