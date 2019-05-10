<template>
  <div>
    get传值为:
    {{p}}
    <span v-for="(i,index) in arr" :key="index" @click="change2">{{i}}</span>
    <br>
    <span @click="change3">{{obj.name}}___{{obj.s}}__{{obj.x}}</span>
    <br>
    <input v-model="firstName" @click="change">
    <div>{{firstName}}</div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "detail",
  data() {
    return {
      p: "",
      arr: [1, 2, 3],
      obj: { name: "1", s: 2 },
      firstName: "dam"
    };
  },
  mounted() {
    console.log(this.$route.query); //动态路由获取参数
    this.p = this.$route.query.id;
    this.$http.get('/api').then(res=>{
        console.log(res)
    })
  },
  methods: {
    change() {
      this.firstName = 123;
    },
    change2() {
      this.arr=[4,6,7];
    },
    change3() {
      this.obj.name = 123;
    }
  },
  watch: {
    firstName: {
      handler: (news, old) => {
        console.log(news, old);
      },
      deep: true //深度监听 对象数据类型的变动
      //immediate: true
    },
    arr: {
      deep: true,
      handler(newValue, oldValue) {
        console.log("newValue", newValue);
        console.log("oldValue", oldValue);
      }
    },
    obj: {
      deep: true,
      handler(newValue, oldValue) {
        console.log("newValue", newValue);
        console.log("oldValue", oldValue);
      }
    }
  }

  //watch用法
  /*　首先确认 watch是一个对象，一定要当成对象来用。 对象就有键，有值。

　　键：就是你要监控的那个家伙，比如说$route，这个就是要监控路由的变化，或者是data中的某个变量。

　　值可以是函数：就是当你监控的家伙变化时，需要执行的函数，这个函数有两个形参，第一个是当前值，第二个是变化后的值。

　　值也可以是函数名：不过这个函数名要用单引号来包裹。

　　第三种情况厉害了。 值是包括选项的对象：选项包括有三个。

　　1、第一个handler：其值是一个回调函数。即监听到变化时应该执行的函数。

　　2、第二个是deep：其值是true或false；确认是否深入监听。（一般监听时是不能监听到对象属性值的变化的，数组的值变化可以听到。）

　　3、第三个是immediate：其值是true或false；确认是否以当前的初始值执行handler的函数
 */
};

//对象监听
//Vue.js 不能检测到对象属性的添加或删除 需要使用this.$set(data, 属性名, 值)

//数组监听
// 由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
// 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
// 当你修改数组的长度时，例如：vm.items.length = newLength
</script>
