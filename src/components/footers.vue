<template>
  <div class="footer">
    <router-link to="/">home</router-link>
    <router-link to="/new">new</router-link>
    <router-link to="/more">more</router-link>
  </div>
</template>

<script>
export default {
  name: "footers",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/params.scss";
.footer {
  background: #fff;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  height: 3rem;
  width: 100%;
  @include pf(unset, 0);
  @include flex(center, center, row);
  max-width: 750px;
  a {
    flex: 1;
    text-align: center;
  }
}
</style>
