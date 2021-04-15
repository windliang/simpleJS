import router from './router'

router.beforeEach((to, from, next) => {
    let permArr = ['navPage2A']
    console.log(to, from)
    if (permArr.indexOf(to.name) === -1) {
        next()
    } else {
        // next({path: '/', replace: true}) // 跳转成功了，但抛出错误
        router.push({ path: '/' }).catch(err => {})
    }
})
