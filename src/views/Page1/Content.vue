<template>
  <BaseBody>
    <ListContainer @onClick="onClick" :list="sectionList1"></ListContainer>
    <ListContainer @onClick="onClick" :list="sectionList2"></ListContainer>
    <ListContainer @onClick="onClick" :list="sectionList3"></ListContainer>
  </BaseBody>
</template>
<script>
import ListContainer from './ListContainer';

export default {
  data() {
    return {
      sectionList1: [
        {
          icon: 'index-action-wait',
          desc: '待接单',
          count: 2,
          color: 'rgb(39, 137, 236)',
        },
        {
          icon: 'index-action-wait',
          desc: '待处理',
          count: 8,
          color: 'rgb(241, 167, 38)',
        },
        {
          icon: 'index-action-check',
          desc: '待审核',
          count: 2,
          color: 'rgb(236, 68, 68)',
        },
      ],
      sectionList2: [
        {
          icon: 'index-action-gratis',
          desc: '有/无偿',
          count: 2,
          color: 'rgb(85, 168, 146)',
        },
        {
          icon: 'index-action-applying',
          desc: '申请中',
          count: 8,
          color: 'rgb(64, 140, 226)',
        },
        {
          icon: 'index-action-retreat',
          desc: '退单',
          count: 2,
          color: 'rgb(236, 68, 68)',
        },
        {
          icon: 'index-action-synergy',
          desc: '协同',
          count: 2,
          color: 'rgb(241, 167, 38)',
        },
      ],
      sectionList3: [
        {
          icon: 'index-action-complain',
          desc: '投诉',
          count: 2,
          color: 'rgb(241, 167, 38)',
        },
        {
          icon: 'index-action-consult',
          desc: '咨询',
          count: 8,
          color: 'rgb(85, 168, 146)',
        },
        {
          icon: 'index-action-repair',
          desc: '报修',
          count: 2,
          color: 'rgb(64, 140, 226)',
        },
        {
          icon: 'index-action-praise',
          desc: '表扬',
          count: 2,
          color: 'rgb(236, 68, 68)',
        },
      ],
    };
  },
  methods: {
    onClick(item) {
      console.log(item);
    },
  },
  components: {
    ListContainer,
  },
};
</script>
<style lang="stylus">

</style>
