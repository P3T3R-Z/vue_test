<template>
  <div class="navs">
    <p class="t">动态路由</p>
    <router-link v-for="(item, index) in list" :key="index" :to="'/Params/'+item.id">{{item.name}}</router-link>
    <p class="t">get传值</p>
    <router-link to="/detail?id=123">走你</router-link>
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
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/params.scss";
.navs {
  @include flex(center, flex-start, column);
  .t{
    font-size:1.2rem;
    margin:.5rem
  }
}
</style>
