<template>
  <div class="newdetails">
    <p class="title">{{title}}</p>
    <div v-html="content" class="content"></div>
  </div>
</template>
<script>
export default {
  name: "newsDetails",
  data() {
    return {
      title: "",
      content: "",
      aid: ""
    };
  },
  mounted() {
    this.aid = this.$route.params.aid;
    console.log(this.aid);
    this.getcontent();
  },
  methods: {
    getcontent() {
      const api =
        "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" +
        this.aid;
      this.$http.get(api).then(
        res => {
          this.title = res.body.result[0].title;
          this.content = res.body.result[0].content;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.newdetails {
  width: 100%;
  p.title {
    font-size: 1.6rem;
    width: 90%;
    margin:2rem auto;
  }

  .content {
    line-height: 1.2rem;
    width: 90%;
    margin:0 auto;
  }
}

</style>
