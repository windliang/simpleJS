// 编译模板
class Compile{
    constructor(el, vm){
        this.$vm = vm
        this.$el = document.querySelector(el)
        if(this.$el){
            // 解析 html 挨个遍历
            this.$fragment = this.node2Fragment(this.$el)
            // 编译模板
            this.compileElement(this.$fragment)
            // 把编译后的模板，放在 html 里
            this.$el.appendChild(this.$fragment)
        }
        // console.log(this.$el.innerHTML)
    }
    node2Fragment(el){
        let fragment = document.createDocumentFragment()
        let child
        while(child=el.firstChild){
            fragment.appendChild(child)
        }
        return fragment
    }
    compileElement(el){
        const childNodes = el.childNodes
        Array.from(childNodes).forEach(node => {
            let text = node.textContent
            let reg = /\{\{(.*)\}\}/
            if(this.isElement(node)){
                this.compile(node)
            }else if(this.isTextNode(node) && reg.test(text)){
                this.compileText(node, RegExp.$1)
            }
            // 遍历子节点
            if(node.childNodes && node.childNodes.length){
                this.compileElement(node)
            }
        })
        // console.log(el)
    }
    compile(node){
        // 遍历属性和子元素
        let nodeAttrs = node.attributes
        Array.from(nodeAttrs).forEach(attr => {
            const attrName = attr.name
            let exp = attr.value
            // v-model => model
            if(this.isDirective(attrName)){
                let dir = attrName.substring(2)
                // console.log(dir)
                this[dir](node, this.$vm, exp)
            }
            // @click => click
            if(this.isEventDirective(attrName)){
                let dir = attrName.substring(1)
                this.eventHandle(node, this.$vm, exp, dir)
            }
        })
    }
    eventHandle(node, vm, exp, dir){
        // console.log('监听事件')
        let fn = vm.$options.methods[exp]
        if(dir && fn){
            node.addEventListener(dir, fn.bind(vm), false)
        }
    }
    text(node, vm, exp){
        this.update(node, vm, exp, 'text')
    }
    html(node, vm, exp){
        this.update(node, vm, exp, 'html')
    }
    model(node, vm, exp){
        this.update(node, vm, exp, 'model')
        // 监听 input 事件，实现双向绑定
        let val = vm[exp]
        node.addEventListener('input', e => {
            let newValue = e.target.value
            vm[exp] = newValue
            val = newValue
        })
    }
    // 统一处理
    update(node, vm, exp, dir){
        // 添加监听器
        const updaterFn = this[dir + 'Updater']
        // console.log(updaterFn)
        updaterFn && updaterFn(node, vm[exp])
        new Watcher(vm, exp, value => {
            // 每次有变动，就执行
            updaterFn && updaterFn(node, vm[exp])
        })
    }
    textUpdater(node, value){
        node.textContent = value
    }
    htmlUpdater(node, value){
        node.innerHTML = value
    }
    modelUpdater(node, value){
        node.value = value
    }
    // 是不是 Vue 的属性
    isDirective(attr){
        return attr.indexOf('v-') === 0
    }
    // 是不是事件
    isEventDirective(attr){
        return attr.indexOf('@') === 0
    }
    compileText(node,exp){
        this.text(node, this.$vm, exp)
        // console.log(node,exp)
    }
    isElement(node){
        return node.nodeType == 1
    }
    isTextNode(node){
        return node.nodeType == 3
    }
}

// 收集依赖
class Dep{
    constructor(){
        this.deps = []
    }
    addDep(dep){
        this.deps.push(dep)
    }
    notify(){
        this.deps.forEach(dep => {
            // dep 都是监听器
            dep.update()
        })
    }
}

class Watcher{
    constructor(vm, key, cb){
        // Dep.target = this
        this.cb = cb
        this.vm = vm
        this.key = key
        this.value = this.get()
    }
    get(){
        Dep.target = this
        let value = this.vm[this.key]
        return value
    }
    update(){
        this.value = this.get()
        this.cb.call(this.vm, this.value)
        console.log('视图更新了')
    }
}

class Vue {
    constructor(options){
        this.$data = options.data
        this.$options = options
        this.observer(this.$data)
        // new Watcher()
        this.$compile = new Compile(options.el, this)
        // console.log('模拟 render 触发 name 的 getter', this.$data.name)
    }
    observer(value){
        Object.keys(value).forEach(key => {
            this.proxyData(key)
            this.defindReactive(value, key, value[key])
        })
    }
    proxyData(key){
        Object.defineProperty(this, key, {
            get(){
                return this.$data[key]
            },
            set(newVal){
                this.$data[key] = newVal
            }
        })
    }
    defindReactive(obj, key, val){
        // 每一个数据都新建一个依赖
        const dep = new Dep()
        Object.defineProperty(obj, key, {
            get(){
                // 收集依赖
                Dep.target && dep.addDep(Dep.target)
                return val
            },
            set(newVal){
                if(newVal === val) return
                val = newVal
                dep.notify()
            }
        })
    }
}