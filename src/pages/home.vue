<template>
  <ul class="newslist">
    <li v-for="(item, index) in list" :key="index" @click="getdetails(item.aid)">{{item.title}}</li>
  </ul>
</template>

<script>
export default {
  name: "home",
  data: function() {
    return {
      list: ""
    };
  },
  mounted() {
    this.getnews();
  },
  methods: {
    getnews() {
      const api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.$http.jsonp(api).then(
        res => {
          this.list = res.body.result;
        },
        err => {
          console.log(err);
        }
      );
    },
    getdetails(aid) {
      //动态路由,
      this.$router.push({ path: `/newsDetail/${aid}`});
      //动态路由, 命名路由
      //this.$router.push({ name: "newsDetails", params: {aid}  });
      //get传值
      //this.$router.push({ path: "newDetail", query: {aid}  });
    }
  }
};
</script>

<style lang="scss" scoped>
.newslist {
  li {
    line-height: 2rem;
  }
}
</style>
