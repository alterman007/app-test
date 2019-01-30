<template>
  <i
    class="base-icon iconfont"
    :class="[`icon-${type}`]"
  >
    <slot></slot>
  </i>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="stylus">
.base-icon {
  // font-size: 16px;
}
</style>
