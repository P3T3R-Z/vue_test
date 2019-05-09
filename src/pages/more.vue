<template>
  <div class="more">
    <router-link to="/more/moreadd">moreadd</router-link>
    <router-link to="/more/morelist">morelist</router-link>
    <router-view/>
    <box :text="`我是局部组件`" v-on:customeEvent="parentClick" style="margin-top: 2rem">
      <div slot="cc">插槽</div>
    </box>
    <activity-list :e="`我是全局组件`" style="margin-top: 2rem"/>
  </div>
</template>

<script>
import box from "@/components/Box";
export default {
  components: {
    box
  },
  name: "more",
  data() {
    return {
      msg: "more"
    };
  },
  methods: {
    parentClick(p) {
      alert(p);
    }
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
