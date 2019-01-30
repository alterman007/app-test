<template>
  <ul class="list-icon-wrapper">
    <li
      v-for="(item, index) in list"
      :key="item.desc"
      class="item"
      :class="{'hidden-h-border': ifHiddenBorder(index)}"
      @click="onClick(item)"
    >
      <BaseIcon :type="item.icon" class="action-icon" :style="{color: item.color}">
        <span class="count" :style="{border: `1px solid ${item.color}`}">{{item.count}}</span>
      </BaseIcon>
      <span class="desc">{{item.desc}}</span>
    </li>
    <li v-if="list.length % 3 === 1" class="item hidden-h-border"></li>
  </ul>
</template>
<script>
export default {
  props: {
    list: Array,
  },
  methods: {
    ifHiddenBorder(index) {
      return index + 1 > Math.floor(this.list.length / 3 - 0.1) * 3;
    },
    onClick(item) {
      this.$emit('onClick', item);
    },
  },
};
</script>
<style lang="stylus" scoped>
borderColor = rgb(229, 229, 229);

.list-icon-wrapper {
  margin: 5vw;
  background: #fff;
  flex-wrap: wrap;
  display: flex;
  border-radius: 10px;
  list-style: none;
  padding: 0;

  .item {
    width: 30vw;
    height: 30vw;
    box-sizing: border-box;
    border-bottom: 1px solid borderColor;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align center
    .action-icon {
      font-size: 30px;
      position: relative;
      .count {
        position: absolute;
        transform translate(3px, -6px);
        width 20px;
        height 20px;
        line-height 20px;
        background #fff;
        left 50%
        border-radius: 50%;
        font-size: 14px;
      }
    }
    .desc {
      color: #000
    }

    &.hidden-h-border {
      border-bottom: none;
    }

    &:nth-child(3n + 2):before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      border-left: 1px solid;
      border-right: 1px solid;
      border-image: linear-gradient(0deg, transparent 16%, borderColor 16% 84%, transparent 84%) 1;
    }
  }
}
</style>
