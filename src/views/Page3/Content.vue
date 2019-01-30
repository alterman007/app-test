<template>
  <div class="page3-wrapper">
    <InfoSection :title="ownerSection.title" :infoList="ownerSection.infoList" />
    <InfoSection :title="orderSection.title" :infoList="orderSection.infoList">
      <div class="nv-item image-container">
        <img
          v-for="imgSrc in orderInfo.imageUrl"
          :key="imgSrc"
          :src="imgSrc"
          :alt="imgSrc"
        >
      </div>
    </InfoSection>
    <InfoSection :title="submitSection.title" :infoList="submitSection.infoList" />
  </div>
</template>
<script>
import moment from 'moment';
import InfoSection from './InfoSection';

export default {
  data() {
    return {
      ownerInfo: {
        name: '张晓晓',
        housePropertyInfo: '旭日上城一区3-1-101',
        phoneNumber: '12345678910',
        createdAt: Date.now() - 24 * 3600 * 1000,
        perferHandleBefore: Date.now() + 24 * 3600 * 1000,
      },
      orderInfo: {
        source: '400坐席订单',
        code: '56486232456',
        classification: '地产',
        type: '投诉-办事效率底下',
        level: '四级',
        title: '标题',
        content: '3-2-17层，电梯厅地面瓷砖松动，电梯厅地面瓷砖松动，电梯厅地面瓷砖松动，电梯厅地面瓷砖松动',
        imageUrl: [
          'http://02.imgmini.eastday.com/mobile/20170220/d4c9ecdc1b691361d917fa1795f757d1_wmk.jpeg#1',
          'http://02.imgmini.eastday.com/mobile/20170220/d4c9ecdc1b691361d917fa1795f757d1_wmk.jpeg#2',
          'http://02.imgmini.eastday.com/mobile/20170220/d4c9ecdc1b691361d917fa1795f757d1_wmk.jpeg#3',
          'http://02.imgmini.eastday.com/mobile/20170220/d4c9ecdc1b691361d917fa1795f757d1_wmk.jpeg#4',
          'http://02.imgmini.eastday.com/mobile/20170220/d4c9ecdc1b691361d917fa1795f757d1_wmk.jpeg#5',
        ],
      },
      submitUserInfo: {
        name: '李小木',
        submitTime: Date.now() + 24 * 3600 * 1000,
      },
    };
  },
  computed: {
    ownerSection() {
      return {
        title: '业主信息',
        infoList: [
          { key: '业主姓名/发起人', value: this.ownerInfo.name },
          { key: '房产/商铺信息', value: this.ownerInfo.housePropertyInfo },
          { key: '电话', value: this.ownerInfo.phoneNumber },
          { key: '发起时间', value: moment(this.ownerInfo.createdAt).format('YYYY-MM-DD  HH:mm') },
          { key: '期待处理时间', value: moment(this.ownerInfo.perferHandleBefore).format('YYYY-MM-DD  HH:mm') },
        ],
      };
    },
    orderSection() {
      return {
        title: '工单信息',
        infoList: [
          { key: '单来源', value: this.orderInfo.source },
          { key: '工单编号', value: this.orderInfo.code },
          { key: '产业分类', value: this.orderInfo.classification },
          { key: '工单类型', value: this.orderInfo.type },
          { key: '投诉等级', value: this.orderInfo.level },
          { key: '工单标题', value: this.orderInfo.title },
          { key: '工单内容', value: this.orderInfo.content },
        ],
      };
    },
    submitSection() {
      return {
        title: '提交人信息',
        infoList: [
          { key: '提交人姓名', value: this.submitUserInfo.name },
          { key: '提交时间', value: moment(this.ownerInfo.submitTime).format('YYYY-MM-DD  HH:mm') },
        ],
      };
    },
  },
  components: {
    InfoSection,
  },
};
</script>
<style lang="stylus">
.page3-wrapper {
  .image-container {
    font-size: 0;
    display flex;
    flex-wrap wrap;
    // justify-content space-around;
    img {
      width 20vw;
      height 20vw;
      margin 1vw 0 1vw 3vw;
    }
  }
}
</style>
