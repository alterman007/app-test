<template>
  <BaseFooter>
    <div class="link-container">
      <div class="link-item" v-for="link in links" :key="link.desc">
        {{link.desc}}
      </div>
    </div>
  </BaseFooter>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { icon: '', desc: '首页' },
        { icon: '', desc: '抢单' },
        { icon: '', desc: '日常' },
        { icon: '', desc: '我的' },
      ],
    };
  },
}
</script>
<style lang="stylus">
.link-container {
  display flex;
}
</style>

