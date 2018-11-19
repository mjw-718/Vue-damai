<template>
    <div class="searchWrap">
         <div class="header">
            <div class="top-city">
                <svg t="1542207573815" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5300" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z" p-id="5301"></path></svg>
            </div>
            <div class="top-search">
                <svg t="1541463774532" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2513" width="15" height="15"><path d="M750.3 198.7C598 46.4 351.1 46.4 198.7 198.7s-152.3 399.2 0 551.5C345.1 896.6 578.8 902.3 732 767.3l172.1 172.1 35.4-35.4-172.1-171.9c135-153.2 129.3-387-17.1-533.4z m39.3 403.8c-17.1 42.1-42.2 80-74.7 112.4-32.5 32.5-70.3 57.6-112.4 74.7-40.7 16.5-83.8 24.9-128 24.9s-87.2-8.4-128-24.9c-42.1-17.1-80-42.2-112.4-74.7s-57.6-70.3-74.7-112.4c-16.5-40.7-24.9-83.8-24.9-128s8.4-87.2 24.9-128c17.1-42.1 42.2-80 74.7-112.4s70.3-57.6 112.4-74.7c40.7-16.5 83.8-24.9 128-24.9s87.2 8.4 128 24.9c42.1 17.1 80 42.2 112.4 74.7 32.5 32.5 57.6 70.3 74.7 112.4 16.5 40.7 24.9 83.8 24.9 128s-8.4 87.3-24.9 128z" fill="" p-id="2514"></path></svg>
                <input id="seaInp" type="text" placeholder="搜索明星、演出比赛、场馆">
            </div>
            <div class="profile">
                <span>搜索</span>
            </div>
        </div>
        <div class="mjw"></div>
    </div>
</template>
<style lang="stylus" scoped>
@import "~styles/mborder.styl";
.searchWrap{
    width 100%
    height 100%
    display flex
    flex-direction column
    background #ffffff
    .header {
        width : 100%;
        height 0.44rem
        display: flex;
        align-items: center;
        padding 0 .15rem
        mborder 0 0 1px 0,#ccc

        .top-city {
            height: 100%;
            flex: 55;
            box-sizing: border-box;
            font-size: 0.16rem;
            color: #222;
            display: flex;
            align-items: center;

            svg {
                fill #cccccc
                margin-top: -0.01rem;
                margin-right: 0.02rem;
            }

            span {
                ellipsis();
            }
        }

        .top-search {
            height: 0.28rem;
            flex: 551;
            background: #f5f5f5;
            box-sizing: border-box;
            font-size: 0.14rem;
            font-family: sans-serif;
            color: #888;
            display: flex;
            align-items: center;
            padding-left: 0.18rem;
            border-radius: 25px;

            svg {
                margin-top: 0.02rem;
                margin-right: 0.09rem;
            }

            #seaInp {
                width: 1.68rem;
                font-size: 0.10rem;
                border: 0;
                outline:none;
                cursor: pointer;
                background: #f5f5f5;
            }
        }

        .profile {
            box-sizing: border-box;
            flex: 84;
            display: flex;
            flex-direction column
            justify-content: center;
            align-items: center;
        }
    }
    .mjw{
        flex 1
    }
}
</style>

