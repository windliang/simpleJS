Vue 组件之间的通信大概归类为：
- 父子组件通信: props；ref；\$attrs / \$listeners；\$parent / $children
- 兄弟组件通信: eventBus；vuex
- 跨级通信: eventBus；Vuex；\$attrs / $listeners

### 一、props/$emit
#### 1.父组件向子组件传值
通过 `props` 传值。
父组件的代码：
```
<template>
  <div class="section">
    <child :list="list"></child>
  </div>
</template>
<script>
import child from './child.vue'
export default {
  components: { child },
  data() {
    return {
      list: ['a1', 'b2', 'c3']
    }
  }
}
</script>
```
子组件的代码(即 child.vue)：
```
<template>
  <div>
    <span v-for="(item, index) in list" :key="index">{{item}}</span>
  </div>
</template>
<script>
export default {
  props: ['list'],
}
</script>
```
#### 2.子组件向父组件传值
`$emit` 绑定一个自定义事件, 当这个语句被执行时, 就会将参数 `arg` 传递给父组件,父组件通过 `v-on` 监听并接收参数。

父组件的代码：
```
<template>
  <div class="section">
    <child :list="list"  @onEmitIndex="onEmitIndex"></child>
    <p>{{currentIndex}}</p>
  </div>
</template>
<script>
import child from './child.vue'
export default {
  components: { child },
  data() {
    return {
      currentIndex: -1,
      list: ['a1', 'b2', 'c3']
    }
  },
  methods: {
    onEmitIndex(idx) {
      this.currentIndex = idx
    }
  }
}
</script>
```
子组件的代码(即 child.vue)：
```
<template>
  <div>
    <span v-for="(item, index) in list" :key="index" @click="emitIndex(index)">{{item}}</span>
  </div>
</template>
<script>
export default {
  props: ['list'],
  methods: {
    emitIndex(index) {
      this.$emit('onEmitIndex', index)
    }
  }
}
</script>
```
### 二、ref/refs
`ref` 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例，可以通过实例直接调用组件的方法或访问数据。也算是子组件向父组件传值的一种。
- Vue 教程[访问子组件实例或子元素](https://vuejs.bootcss.com/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0)。

父组件 parent.vue：
```
<template>
  <child ref="childForRef"></child>
</template>
<script>
import child from './child.vue'
  export default {
    components: { child },
    mounted() {
      const childForRef = this.$refs.childForRef;
      console.log(childForRef.name);
      childForRef.sayHello();
    }
  }
</script>
```
子组件 child.vue：
```
export default {
  data () {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    sayHello () {
      console.log('hello')
    }
  }
}
```
### 三、eventBus
`eventBus` 又称为事件总线，在 vue 中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件。一般用来兄弟组件和隔代组件传值。
1. 首先需要创建一个事件总线并将其导出, 以便其他模块可以使用或者监听它。
bus.js:
```
import Vue from 'vue'
export const bus = new Vue()
```
2. 发送事件，假设有 child1、child2 两个兄弟组件，在 `child1.vue` 中发送事件。
parent.vue:
```
<template>
  <div>
    <child1></child1>
    <child2></child2>
  </div>
</template>
<script>
import child1 from './child1.vue'
import child2 from './child2.vue'
export default {
  components: { child1, child2 }
}
</script>
```
child1.vue:
```
<template>
  <div>
    <button @click="additionHandle">+加法器</button>    
  </div>
</template>
<script>
import {bus} from '@/bus.js'
console.log(bus)
export default {
  data(){
    return{
      num:1
    }
  },
  methods:{
    additionHandle(){
      bus.$emit('addition', {
        num:this.num++
      })
    }
  }
}
</script>
```
3. 在 `child2.vue` 中接收事件。
```
<template>
  <div>计算和: {{count}}</div>
</template>
<script>
import { bus } from '@/bus.js'
export default {
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    bus.$on('addition', arg=> {
      this.count = this.count + arg.num;
    })
  }
}
</script>
```
4.如果想移除事件的监听, 可以像下面这样操作：
```
 import { bus } from './bus.js'
Bus.$off('addition', {})
```
### 四、Vuex
父组件：
```
<template>
  <div id="app">
    <ChildA/>
    <ChildB/>
  </div>
</template>

<script>
  import ChildA from './ChildA' // 导入A组件
  import ChildB from './ChildB' // 导入B组件

  export default {
    name: 'App',
    components: {ChildA, ChildB} // 注册A、B组件
  }
</script>
```
子组件childA：
 ```
 <template>
  <div id="childA">
    <h1>我是A组件</h1>
    <button @click="transform">点我让B组件接收到数据</button>
    <p>因为你点了B，所以我的信息发生了变化：{{BMessage}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        AMessage: 'Hello，B组件，我是A组件'
      }
    },
    computed: {
      BMessage() {
        // 这里存储从store里获取的B组件的数据
        return this.$store.state.BMsg
      }
    },
    methods: {
      transform() {
        // 触发receiveAMsg，将A组件的数据存放到store里去
        this.$store.commit('receiveAMsg', {
          AMsg: this.AMessage
        })
      }
    }
  }
</script>
```
子组件 childB：
 ```
 <template>
  <div id="childB">
    <h1>我是B组件</h1>
    <button @click="transform">点我让A组件接收到数据</button>
    <p>因为你点了A，所以我的信息发生了变化：{{AMessage}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        BMessage: 'Hello，A组件，我是B组件'
      }
    },
    computed: {
      AMessage() {
        // 这里存储从store里获取的A组件的数据
        return this.$store.state.AMsg
      }
    },
    methods: {
      transform() {
        // 触发receiveBMsg，将B组件的数据存放到store里去
        this.$store.commit('receiveBMsg', {
          BMsg: this.BMessage
        })
      }
    }
  }
</script>
```
vuex的 `store.js`
```
import Vue from 'vue'
 import Vuex from 'vuex'
 Vue.use(Vuex)
 const state = {
   // 初始化A和B组件的数据，等待获取
   AMsg: '',
   BMsg: ''
 }
 
 const mutations = {
   receiveAMsg(state, payload) {
     // 将A组件的数据存放于state
     state.AMsg = payload.AMsg
   },
   receiveBMsg(state, payload) {
     // 将B组件的数据存放于state
     state.BMsg = payload.BMsg
   }
 }
 
 export default new Vuex.Store({
   state,
   mutations
 })
```
然后需要在  ` main.js` 中引入 `vuex`
```
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```
### 五、\$attrs/$listeners
parent.vue：
```
<template>
  <div>
    <child-a :name="name" :age="age" :gender="gender" :height="height" title="嘿嘿嘿"></child-a>
  </div>
</template>
<script>
import ChildA from './ChildA'
export default {
  components: { ChildA },
  data() {
    return {
      name: "zhang",
      age: "18",
      gender: "女",
      height: "168"
    };
  }
};
</script>
```

 // childCom1.vue
 ```
 <template class="border">
   <div>
     <p>name: {{ name}}</p>
     <p>childCom1的$attrs: {{ $attrs }}</p>
     <child-com2 v-bind="$attrs"></child-com2>
   </div>
 </template>
 <script>
 const childCom2 = () => import("./childCom2.vue");
 export default {
   components: {
     childCom2
   },
   inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
   props: {
     name: String // name作为props属性绑定
   },
   created() {
     console.log(this.$attrs);
      // { "age": "18", "gender": "女", "height": "158", "title": "程序员成长指北" }
   }
 };
 </script>
```

 // childCom2.vue
 ```
 <template>
   <div class="border">
     <p>age: {{ age}}</p>
     <p>childCom2: {{ $attrs }}</p>
   </div>
 </template>
 <script>
 
 export default {
   inheritAttrs: false,
   props: {
     age: String
   },
   created() {
     console.log(this.$attrs); 
     // { "gender": "女", "height": "158", "title": "程序员成长指北" }
   }
 };
 </script>
```
### 六、\$children/$parent
parent.vue：
```
 <template>
  <div>
    <div>{{msg}}</div>
    <child></child>
    <button @click="changeA">点击改变子组件值</button>
  </div>
</template>

<script>
import Child from './child'
export default {
  components: { Child },
  data() {
    return {
      msg: 'Welcome'
    }
  },

  methods: {
    changeA() {
      this.$children[0].messageA = 'this is new value'
    }
  }
}
</script>
```
 child.vue：
```
<template>
  <div class="com_a">
    <span>{{messageA}}</span>
    <p>获取父组件的值为:  {{parentVal}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageA: 'this is old'
    }
  },
  computed:{
    parentVal(){
      return this.$parent.msg;
    }
  }
}
</script>
```
>要注意边界情况，如在 `#app` 上拿 `$parent` 得到的是 `new Vue()` 的实例，在这实例上再拿 `$parent` 得到的是 `undefined`，而在最底层的子组件拿 `$children` 是个空数组。也要注意得到 `$parent` 和 `$children` 的值不一样，`$children` 的值是数组，而 `$parent` 是个对象。