<template>
  <section class="section-info-wrapper">
    <h5>{{title}}</h5>
    <NVItem
      v-for="item in infoList"
      :key="item.key"
      :name="item.key"
      :value="item.value"
      class="nv-item"
    />
    <slot></slot>
  </section>
</template>
<script>
import NVItem from './NVItem';

export default {
  props: {
    title: String,
    infoList: Array,
  },
  components: {
    NVItem,
  },
};
</script>
<style lang="stylus">
.section-info-wrapper {
  background #fff;
  margin-bottom: 3vw;
  h5 {
    margin: 0;
    padding: 4vw 2.5vw;
    font-size: 5.5vw;
    font-weight: normal;
  }
  .nv-item {
    padding 1.5vw 2.5vw;
    border-top: 1px solid #eee;
  }
}
</style>
