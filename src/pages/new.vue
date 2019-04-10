<template>
  <div class="navs">
    <p class="t">动态路由</p>
    <router-link v-for="(item, index) in list" :key="index" :to="'/Params/'+item.id">{{item.name}}</router-link>
    <p class="t">get传值</p>
    <router-link to="/detail?id=123">走你</router-link>
    <p class="t">vuex</p>
    <button v-on:click="plus()">mutations</button>
    getters: {{this.$store.getters.computed}}
    <button v-on:click="plus2()">actions</button>
  </div>
</template>

<script>
export default {
  name: "new",

  data: function() {
    return {
      msg: "new",
      list: [
        {
          name: "first",
          id: "1"
        },
        {
          name: "second",
          id: "2"
        },
        {
          name: "third",
          id: "3"
        }
      ]
    };
  },
  mounted() {
    
  },
  methods: {
    plus() {
      this.$store.commit("incCount");
      
      console.log("----store----", this.$store.state.count);
    },
    plus2() {
      this.$store.dispatch('incMutationCount')
      console.log("----store----", this.$store.state.count);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/params.scss";
.navs {
  @include flex(center, flex-start, column);
  .t {
    font-size: 1.4rem;
    margin: 0.5rem;
  }
}
</style>
