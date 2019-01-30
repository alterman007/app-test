<template>
  <div
    class="order-detail-wrapper"
    :style="{'background-image': backgroundImage}"
  >
    <div class="info-item">
      <span class="key">业主/提单人</span>
      <span class="value global-ellipsis">{{detail.username}}</span>
    </div>
    <div class="info-item">
      <span class="key">房产信息</span>
      <span class="value global-ellipsis">{{detail.houseInfo}}</span>
    </div>
    <div class="info-item">
      <span class="key">工单内容</span>
      <span class="value global-ellipsis">{{detail.workorderContent}}</span>
    </div>
    <div class="info-item">
      <span class="key">工单状态</span>
      <span class="value global-ellipsis" :style="{color: workorderStateColor}">
        {{detail.workorderState}}
      </span>
    </div>
    <div class="info-item global-ellipsis">
      将于{{this.expirationTime}}超时
    </div>
    <div class="type-info">{{detail.workorderType}}</div>
    <div class="workorder-info" v-if="detail.workorderInfo">
      {{detail.workorderInfo}}
    </div>
    <div class="user-action">{{detail.userAction}}</div>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  props: {
    detail: Object,
  },
  computed: {
    expirationTime() {
      return moment(this.detail.expirationAt).format('YYYY-MM-DD  HH:mm');
    },
    backgroundImage() {
      /* eslint-disable no-nested-ternary */
      const color = this.detail.workorderType === '派' ? '#2789ec'
        : this.detail.workorderType === '抢' ? '#f1a726'
          : '#f1a726';
      return `linear-gradient(225deg, ${color} 0 40px, transparent 40px)`;
    },
    workorderStateColor() {
      /* eslint-disable no-nested-ternary */
      return this.detail.workorderState === '待接单' ? '#2789ec'
        : this.detail.workorderType === '处理中' ? '#f1a726'
          : '#f1a726';
    },
  },
};
</script>
<style lang="stylus" scoped>
.order-detail-wrapper {
  background #fff;
  margin 3vw 4vw;
  border-radius 10px;
  padding: 2vw 5vw 4vw;
  position relative;
  .workorder-info {
    position absolute;
    bottom: 42px;
    right 10px;
    padding 0 6px;
    height 22px;
    line-height 22px;
    border-radius 11px;
    border: 1px solid #000;
  }
  .user-action {
    position absolute;
    bottom: 12px;
    right 10px;
  }
  .type-info {
    position absolute;
    top: 10px;
    right 10px;
    color: #fff;
    font-size: 14px;
  }
  .info-item {
    margin 10px 0;
    // border: 1px solid red;
    display flex;
    .key {
      flex: none;
      &:after {
        content: '：';
      }
    }
    .value {
      flex: auto;
    }
  }
}
</style>
