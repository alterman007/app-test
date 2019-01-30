<template>
  <div class="info-item-wrapper">
    <span class="name">{{name}}</span>
    <span class="value">{{value}}</span>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    value: String,
  },
};
</script>
<style lang="stylus">
.info-item-wrapper {
  font-size: 4.5vw;
  line-height 1.6;
  span {
    display: inline-block;
  }
  .name {
    width 40%;
    vertical-align: top;
    &:after {
      content: '：'
    }
  }
  .value {
    width 60%;
  }

}
</style>
