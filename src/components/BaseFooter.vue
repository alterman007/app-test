<template>
  <div class="footer-wrapper">
    <div class="footer-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
.footer-wrapper {
  width: 100%;
  height: 45px;
  z-index 1;

  .footer-content {
    position fixed;
    bottom: 0;
    width: 100%;
    height: 45px;
    background: #fff;
  }
}
</style>
