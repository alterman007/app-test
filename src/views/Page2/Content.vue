<template>
  <div class="page2-content-wrapper">
    <OrderDetail
      v-for="item in list"
      :key="item.key"
      :detail="item"
    />
  </div>
</template>
<script>
import OrderDetail from './OrderDetail';
import addUniqueKey from '../../util';

export default {
  data() {
    return {
      list: addUniqueKey([
        {
          username: '张晓晓',
          houseInfo: '旭日上城三区4-1-101',
          workorderContent: '电梯厅地面瓷砖松动电梯厅地面瓷',
          workorderState: '待接单',
          workorderType: '派',
          expirationAt: Date.now() + Math.floor(10000 * Math.random()),
          userAction: '报修',
        },
        {
          username: '张晓晓',
          houseInfo: '旭日上城三区4-1-101',
          workorderContent: '电梯厅地面瓷砖松动电梯厅地面瓷',
          workorderState: '处理中',
          workorderType: '派',
          workorderInfo: '',
          expirationAt: Date.now() + Math.floor(10000 * Math.random()),
          userAction: '投诉',
        },
        {
          username: '张晓晓',
          houseInfo: '旭日上城三区4-1-101',
          workorderContent: '电梯厅地面瓷砖松动电梯厅地面瓷',
          workorderState: '处理中',
          workorderType: '抢',
          workorderInfo: '协同中',
          expirationAt: Date.now() + Math.floor(10000 * Math.random()),
          userAction: '报修',
        },
        {
          username: '张晓晓',
          houseInfo: '旭日上城三区4-1-101',
          workorderContent: '电梯厅地面瓷砖松动电梯厅地面瓷',
          workorderState: '处理中',
          workorderType: '抢',
          workorderInfo: '延期中',
          expirationAt: Date.now() + Math.floor(10000 * Math.random()),
          userAction: '咨询',
        },
      ]),
    };
  },
  components: {
    OrderDetail,
  },
};
</script>
