<template>
  <div class="more">
      <router-link to="/more/moreadd">moreadd</router-link>
      <router-link to="/more/morelist">morelist</router-link>
      <router-view/>
  </div>
</template>

<script>
export default {
  name:'more',
  data() {
    return {
      msg: "more"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/params.scss";
.more {
  @include flex(center, center, column);
  width: 100%;
  height: 300px;

}
</style>
