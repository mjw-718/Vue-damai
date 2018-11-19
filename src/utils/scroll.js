import BScroll from 'better-scroll'
import { Toast, Indicator } from 'mint-ui';

import http from 'utils/http'

export const scroll = ({
    el,
    horizontal = false,
    url,
    count = 0,
    maindata,
    vm,
    method,
    category = -1
 }) => {
    let num = 0
    let totalcount = 1
    var page = 2
    let bscroll = new BScroll(el, {
        probeType: 1,
        click: true,
        scrollX: horizontal,
        pullUpLoad: {
            threshold: 50
        },
    })
    // 监听pullingUp
    bscroll.on('pullingUp', async () => {
        // console.log(num,totalcount)
        if (count != 0) {
            if (num < totalcount) {
                Indicator.open({
                    text: 'Loading...',
                    spinnerType: 'fading-circle'
                });
                let result = await http({
                    method: "get",
                    url,
                })
                Indicator.close();
                let data = result.data.data.nearByCity.slice(count * num, count * (num + 1))
                // console.log()
                totalcount = Math.ceil((result.data.data.nearByCity.length) / count)
                // console.log(data)
                
                maindata.push(...data)
                vm.$nextTick(() => {
                    bscroll.refresh()
                    num++
                })
            }
            else {
                Toast({
                    message: '到底了',
                    position: 'bottom',
                    duration: 5000
                });
            }
        }
        if(category!=-1){
            let pardata = 'category=' + category + '&page=' + page
            let result = await http({
                method,
                url,
                params: pardata
            });
            let data = result.data.data.list.slice(0, 10)

            // console.log(data)
            page++
            maindata.push(...data)
            // console.log(maindata)
            vm.$nextTick(() => {
                bscroll.refresh()
            })
        }
        bscroll.finishPullUp()

    })
    // 监听横向滚动
    bscroll.on('scroll', () => {
        if (horizontal) {
            const threshold = 50
            const curPosition = bscroll.maxScrollX - bscroll.x
            if (curPosition > threshold) {
                Toast({
                    message: '到头了~',
                    position: 'top',
                    duration: 1000
                })
            }
        }
    })
}
