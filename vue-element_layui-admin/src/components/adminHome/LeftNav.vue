<!--  -->
<template>
  <div class="el-left-wrapper">
    <Menu :isCollapse="isCollapse" />
  </div>
</template>

<script>
import Menu from "../menu/Menu.vue";

export default {
  name: "LeftNav",
  data: function() {
    return {};
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },
  components: {
    Menu
  }
};
</script>
<style lang='scss' >
</style>
