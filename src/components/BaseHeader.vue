<template>
  <div class="header-wrapper">
    <div class="header-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
.header-wrapper {
  width: 100%;
  height 45px;
  position: relative;
  z-index 1;
  .header-content {
    position fixed;
    width 100%;
    top 0;
    // padding-top: 20px;
    background: rgb(67, 137, 228);
    height 45px;
    z-index 1;
    color: #fff;
  }
}
</style>
